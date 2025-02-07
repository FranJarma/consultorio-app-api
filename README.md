## Project Setup

To get started with the project, follow these steps:

1. **Install dependencies**:
  ```bash
  pnpm install
  ```

2. **Run database migrations**:
  ```bash
  npx prisma migrate dev
  ```

3. **Seed the database**:
  ```bash
  npx ts-node prisma/seed.ts
  ```

4. **Start the application**:
  ```bash
  pnpm start
  ```

5. **Access Swagger API documentation**:
   Once the application is running, you can access the Swagger API documentation at `http://localhost:3000/swagger`.

## Project Overview

This project is a web API for a Dental's Office, built with modern technologies including NestJS, Prisma, SqLite, and Swagger. It uses `pnpm` for package management, `ts-node` for running TypeScript files, and `Prisma` for database management. The application includes a seeding script to populate the database with initial data. Once the dependencies are installed and the database is seeded, the application can be started and accessed through a web browser.
