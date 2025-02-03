import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { TurnStateEnum } from './../src/turns/types/turn'
import { HealthEnsuranceEnum } from './../src/types/health-ensurance'

const prisma = new PrismaClient()

async function seed() {
  for (let i = 0; i < 100; i++) {
    const patient = await prisma.patient.create({
      data: {
        fullname: faker.person.fullName(),
        dni: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 5, max: 90 }),
        address: faker.location.streetAddress(),
        locality: faker.location.city(),
        profession: faker.person.jobTitle(),
        healthEnsurance: faker.helpers.arrayElement([HealthEnsuranceEnum.OSDE, HealthEnsuranceEnum.IOMA, HealthEnsuranceEnum.PAMI, HealthEnsuranceEnum.OSECAC, HealthEnsuranceEnum.SANCOR_SALUD]),
      },
    })

    await prisma.clinicalStory.create({
      data: {
        patientId: patient.id,
        observations: faker.lorem.sentence(),
        treatmentPlan: faker.lorem.sentence(),
      },
    })

    for (let j = 0; j < 3; j++) {
      await prisma.turn.create({
        data: {
          patientId: patient.id,
          date: faker.date.future(),
          state: faker.helpers.arrayElement([TurnStateEnum.CANCELLED, TurnStateEnum.COMPLETED, TurnStateEnum.PENDING]),
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
