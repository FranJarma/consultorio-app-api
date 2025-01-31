import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function seed() {
  // Create 1000 Pacients
  for (let i = 0; i < 1000; i++) {
    const pacient = await prisma.pacient.create({
      data: {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        dni: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        birthDate: faker.date.past(),
        address: faker.address.streetAddress(),
      },
    })

    // Create a ClinicalStory for each Pacient
    const clinicalStory = await prisma.clinicalStory.create({
      data: {
        pacientId: pacient.id,
        observations: faker.lorem.sentence(),
      },
    })

    // Create 3 Treatments for each ClinicalStory
    for (let j = 0; j < 3; j++) {
      await prisma.treatment.create({
        data: {
          ClinicalStoryId: clinicalStory.id,
          description: faker.lorem.sentence(),
          cost: parseFloat(faker.commerce.price()),
          date: faker.date.past(),
        },
      })
    }

    // Create 3 Turns for each Pacient
    for (let j = 0; j < 3; j++) {
      await prisma.turn.create({
        data: {
          pacientId: pacient.id,
          date: faker.date.future(),
          state: 'Pending',
          createdAt: new Date(),
        },
      })
    }
  }

  console.log('Database seeded successfully!')
}

// Run the seed function
seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
