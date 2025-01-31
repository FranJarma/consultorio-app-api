-- CreateTable
CREATE TABLE "Pacient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "birthDate" DATETIME NOT NULL,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ClinicalStory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pacientId" TEXT NOT NULL,
    "observations" TEXT,
    CONSTRAINT "ClinicalStory_pacientId_fkey" FOREIGN KEY ("pacientId") REFERENCES "Pacient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Turn" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pacientId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Turn_pacientId_fkey" FOREIGN KEY ("pacientId") REFERENCES "Pacient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Treatment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ClinicalStoryId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cost" REAL NOT NULL,
    CONSTRAINT "Treatment_ClinicalStoryId_fkey" FOREIGN KEY ("ClinicalStoryId") REFERENCES "ClinicalStory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pacient_dni_key" ON "Pacient"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "ClinicalStory_pacientId_key" ON "ClinicalStory"("pacientId");
