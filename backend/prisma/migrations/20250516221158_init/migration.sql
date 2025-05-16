-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "SexualOrientation" AS ENUM ('Asexual', 'Bisexual', 'Gay', 'Lesbian', 'Pansexual', 'Queer', 'Straight');

-- CreateEnum
CREATE TYPE "InterestedIn" AS ENUM ('Male', 'Female', 'Everyone');

-- CreateEnum
CREATE TYPE "LookingFor" AS ENUM ('Long-term partner', 'Long-term, open to short', 'Short-term, open to Long', 'Short-term fun', 'New friends', 'Still figuring it out');

-- CreateEnum
CREATE TYPE "HighestEducation" AS ENUM ('High School', 'Bachelors Degree', 'Masters Degree', 'PhD', 'Other');

-- CreateEnum
CREATE TYPE "Work" AS ENUM ('Student', 'Employed', 'Self-Employed', 'Unemployed', 'Retired', 'Prefer not to say');

-- CreateEnum
CREATE TYPE "Drink" AS ENUM ('Never', 'Occasionally', 'Socially', 'Regularly');

-- CreateEnum
CREATE TYPE "Smoke" AS ENUM ('Social smoker', 'Smoking When drinking', 'Non-smoker', 'Smoker', 'Trying to quit');

-- CreateEnum
CREATE TYPE "Workout" AS ENUM ('Everyday', 'Often', 'Sometimes', 'Never');

-- CreateEnum
CREATE TYPE "LoveLanguage" AS ENUM ('Physical touch', 'Words of affirmation', 'Quality time', 'Gifts', 'Acts of service');

-- CreateEnum
CREATE TYPE "Interests" AS ENUM ('Food and drinks', 'Gaming', 'Going Out', 'Music', 'Outdoor and adventure', 'Social and content', 'Sports and fitness', 'Staying in', 'TV and movies', 'Values and causes', 'Wellness and lifestyle', 'Art & Culture', 'Reading', 'Traveling', 'Photography', 'Fashion & Style', 'Pets & Animals', 'Technology & Gadgets', 'Mindfulness & Meditation', 'DIY & Crafts', 'Board Games & Puzzles', 'Cooking & Baking', 'Learning & Education', 'Cars & Motorcycles', 'Finance & Investing', 'Comedy & Memes');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Accepted', 'Ignored', 'Rejected', 'Interested');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preference" (
    "id" SERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "sexualOrientation" "SexualOrientation" NOT NULL,
    "showSexualOrientation" BOOLEAN NOT NULL,
    "interestedIn" "InterestedIn" NOT NULL,
    "lookingFor" "LookingFor" NOT NULL,
    "school" TEXT,
    "highestEducation" "HighestEducation" NOT NULL,
    "work" "Work" NOT NULL,
    "drink" "Drink" NOT NULL,
    "smoke" "Smoke" NOT NULL,
    "workout" "Workout" NOT NULL,
    "loveLanguage" "LoveLanguage" NOT NULL,
    "into" "Interests"[],
    "blocked_contacts" TEXT[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Preference_userId_key" ON "Preference"("userId");

-- AddForeignKey
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
