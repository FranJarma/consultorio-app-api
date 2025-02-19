// // @ts-ignore
// import { PrismaClient } from '@prisma/client'
// // @ts-ignore
// import { faker } from '@faker-js/faker'
// // @ts-ignore
// import * as bcrypt from 'bcryptjs';
// // @ts-ignore
// import { HealthEnsuranceEnum } from './../src/types/health-ensurance'
// // @ts-ignore
// import { PatientStateEnum } from './../src/patients/types/patient'
// // @ts-ignore
// import { TurnStateEnum } from './../src/turns/types/turn'

// const prisma = new PrismaClient()
// const saltRounds = 10

// async function seed() {
//   console.log('Seeding users...')

//   const users = [
//     { username: 'doctortest', password: 'doctor123', role: 'doctor', fullName: 'Doctor Test' },
//     { username: 'admin', password: 'admin123', role: 'admin', fullName: 'Admin' }
//   ]

//   for (const user of users) {
//     const hashedPassword = await bcrypt.hash(user.password, saltRounds)
//     await prisma.user.upsert({
//       where: { username: user.username },
//       update: {},
//       create: { username: user.username, password: hashedPassword, role: user.role, fullName: user.fullName }
//     })
//   }

//   console.log('Seeding patients...')

//   for (let i = 0; i < 100; i++) {
//     const patient = await prisma.patient.create({
//       data: {
//         fullname: faker.person.fullName(),
//         dni: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
//         phone: faker.phone.number(),
//         email: faker.internet.email(),
//         age: faker.number.int({ min: 5, max: 90 }),
//         address: faker.location.streetAddress(),
//         // @ts-ignore
//         locality: faker.location.city(),
//         profession: faker.person.jobTitle(),
//         // @ts-ignore
//         healthEnsurance: faker.helpers.arrayElement([
//           HealthEnsuranceEnum.OSDE,
//           HealthEnsuranceEnum.IOMA,
//           HealthEnsuranceEnum.PAMI,
//           HealthEnsuranceEnum.OSECAC,
//           HealthEnsuranceEnum.SANCOR_SALUD
//         ]),
//         state: faker.helpers.arrayElement([PatientStateEnum.DELETED, PatientStateEnum.REGISTERED])
//       }
//     })

//     for (let j = 0; j < 5; j++) {
//       await prisma.clinicalStory.create({
//         data: {
//           patientId: patient.id,
//           observations: faker.lorem.sentence(),
//           treatmentPlan: faker.lorem.sentence(),
//           odontogramUrl: faker.image.url(),
//           createdAt: faker.date.soon()
//         }
//       })
//     }

//     for (let j = 0; j < 3; j++) {
//       await prisma.turn.create({
//         data: {
//           patientId: patient.id,
//           date: faker.date.future(),
//           state: faker.helpers.arrayElement([TurnStateEnum.CANCELLED, TurnStateEnum.COMPLETED, TurnStateEnum.PENDING]),
//           createdAt: new Date()
//         }
//       })
//     }
//   }

//   console.log('Database seeded successfully!')
// }

// // Run the seed function
// seed()
//   .catch(e => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
