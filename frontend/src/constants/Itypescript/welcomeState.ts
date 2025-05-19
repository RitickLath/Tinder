export type Gender = "Male" | "Female" | "Other";

export type SexualOrientation =
  | "Asexual"
  | "Bisexual"
  | "Gay"
  | "Lesbian"
  | "Pansexual"
  | "Queer"
  | "Straight";

export type LookingFor =
  | "Long-term partner"
  | "Long-term, open to short"
  | "Short-term, open to long"
  | "Short-term fun"
  | "New friends"
  | "Still figuring it out";

export type SmokingHabit =
  | "Social smoker"
  | "Smoker when drinking"
  | "Non-smoker"
  | "Smoker"
  | "Trying to quit";

export type DrinkingHabit = "Never" | "Occasionally" | "Socially" | "Regularly";

export type WorkoutHabit = "Everyday" | "Often" | "Sometimes" | "Never";

export type LoveLanguage =
  | "Physical touch"
  | "Words of affirmation"
  | "Quality time"
  | "Gifts"
  | "Acts of service";

export type EducationLevel =
  | "High School"
  | "Bachelor's Degree"
  | "Master's Degree"
  | "PhD"
  | "Other";

export type Work =
  | "Student"
  | "Employed"
  | "Self-Employed"
  | "Unemployed"
  | "Retired"
  | "Prefer not to say";

export type Into =
  | "Food and drinks"
  | "Gaming"
  | "Going Out"
  | "Music"
  | "Outdoor and adventure"
  | "Social and content"
  | "Sports and fitness"
  | "Staying in"
  | "TV and movies"
  | "Values and causes"
  | "Wellness and lifestyle"
  | "Art & Culture"
  | "Reading"
  | "Traveling"
  | "Photography"
  | "Fashion & Style"
  | "Pets & Animals"
  | "Technology & Gadgets"
  | "Mindfulness & Meditation"
  | "DIY & Crafts"
  | "Board Games & Puzzles"
  | "Cooking & Baking"
  | "Learning & Education"
  | "Cars & Motorcycles"
  | "Finance & Investing"
  | "Comedy & Memes";

export interface WelcomeState {
  // Basic info
  phone: string;
  name: string;
  gender: Gender;
  dob: string;

  // Sexual Orientation
  sexualOrientation: SexualOrientation;
  showsexualOrientation: boolean;

  // Interested In
  interestedIn: "Male" | "Female" | "Everyone";
  lookingFor: LookingFor;

  // Education and work
  school?: string;
  educationLevel?: EducationLevel;
  work: Work;

  // LifeStyle Habits
  drinkingHabit: DrinkingHabit;
  smokingHabit: SmokingHabit;
  workoutHabit: WorkoutHabit;

  // What are you into has to be array of 5
  into: Into[];

  // Contacts to block
  blockedContact: string[];

  // Lifestyle and habits

  loveLanguage: LoveLanguage;
}
