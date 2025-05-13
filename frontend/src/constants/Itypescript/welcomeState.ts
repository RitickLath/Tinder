export type Gender = "Male" | "Female" | "Non-Binary" | "Other";

export type SexualPreference =
  | "Straight"
  | "Gay"
  | "Lesbian"
  | "Bisexual"
  | "Asexual"
  | "Other";

export type LookingFor =
  | "Relationship"
  | "Friendship"
  | "Casual"
  | "Networking";

export type DrinkingHabit = "Never" | "Occasionally" | "Socially" | "Regularly";

export type WorkoutHabit = "Never" | "Sometimes" | "Regularly" | "Daily";

export type Zodiac =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export type CommunicationStyle =
  | "Direct"
  | "Empathetic"
  | "Playful"
  | "Reserved";

export type LoveLanguage =
  | "Physical touch"
  | "Words of affirmation"
  | "Quality time"
  | "Gifts"
  | "Acts of service";

export interface WelcomeState {
  // Basic info
  name: string;
  dob: string;
  gender: Gender;
  phone: string;

  // Identity and preferences
  sexualPreference: SexualPreference;
  seekingFor: Gender;
  lookingFor: LookingFor;
  distance: string;

  // Education and work
  school?: string;
  educationLevel?: string;
  workoutHabit: WorkoutHabit;

  // Lifestyle and habits
  drinkingHabit: DrinkingHabit;
  pets?: string;
  zodiac: Zodiac;
  communicationStyle: CommunicationStyle;
  loveLanguage: LoveLanguage;

  // Interests and hobbies
  foodAndDrink: string[];
  gaming: string[];
  goingOut: string[];
  music: string[];
  outdoorAndAdventure: string[];
  socialAndContent: string[];
  sportsAndFitness: string[];
  stayingIn: string[];
  tvAndMovies: string[];
  valuesAndCauses: string[];
  wellnessAndLifestyle: string[];

  // Contacts to block
  blockedContact: string[];
}
