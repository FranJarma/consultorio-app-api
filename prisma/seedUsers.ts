import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient()
const saltRounds = 10

async function seed() {
  console.log('Seeding users...')

  const users = [
    { username: 'doctortest', password: 'doctor123', role: 'doctor', fullName: 'Doctor Test' },
    { username: 'admin', password: 'admin123', role: 'admin', fullName: 'Admin' }
  ]

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds)
    await prisma.user.upsert({
      where: { username: user.username },
      update: {},
      create: { username: user.username, password: hashedPassword, role: user.role, fullName: user.fullName }
    })
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
