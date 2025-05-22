/*
  Warnings:

  - The `into` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `lookingFor` on the `Preference` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `highestEducation` on the `Preference` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `work` on the `Preference` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `smoke` on the `Preference` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `loveLanguage` on the `Preference` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Preference" DROP COLUMN "lookingFor",
ADD COLUMN     "lookingFor" TEXT NOT NULL,
DROP COLUMN "highestEducation",
ADD COLUMN     "highestEducation" TEXT NOT NULL,
DROP COLUMN "work",
ADD COLUMN     "work" TEXT NOT NULL,
DROP COLUMN "smoke",
ADD COLUMN     "smoke" TEXT NOT NULL,
DROP COLUMN "loveLanguage",
ADD COLUMN     "loveLanguage" TEXT NOT NULL,
DROP COLUMN "into",
ADD COLUMN     "into" TEXT[];

-- DropEnum
DROP TYPE "HighestEducation";

-- DropEnum
DROP TYPE "Interests";

-- DropEnum
DROP TYPE "LookingFor";

-- DropEnum
DROP TYPE "LoveLanguage";

-- DropEnum
DROP TYPE "Smoke";

-- DropEnum
DROP TYPE "Work";
