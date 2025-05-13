export interface WelcomeState {
  // Basic info
  name: string;
  dob: string;
  gender: string;
  phone: string;

  // Identity and preferences
  sexualPreference: string;
  seekingFor: string;
  lookingFor: string;
  distance: string;

  // Education and work
  school: string;
  educationLevel: string;
  workoutHabit: string;

  // Lifestyle and habits
  drinkingHabit: string;
  pets: string;
  zodiac: string;
  communicationStyle: string;
  loveLanguage: string;

  // Interest and hobbies
  foodAndDrink: string[];
  gaming: string[];
  goingOut: string[];
  music: string[];
  outdoorAndAdventure: string[];
  SocialAndContent: string[];
  SportsAndFitness: string[];
  stayingIn: string[];
  tvAndMovies: string[];
  valuesAndCauses: string[];
  wellnessAndLifeStyle: string[];

  // Contacts to block
  blockedContact: string[];
}
