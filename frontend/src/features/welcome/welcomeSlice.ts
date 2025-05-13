import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WelcomeState } from "../../constants/Itypescript/welcomeState";

// Initial state
const initialState: WelcomeState = {
  // Basic Info
  name: "Ritick",
  dob: "",
  gender: "",
  phone: "",

  // Identity And Preferences
  sexualPreference: "",
  seekingFor: "",
  lookingFor: "",
  distance: "",

  // Education And Work
  school: "",
  educationLevel: "",
  workoutHabit: "",

  // LifeStyle And Habits
  drinkingHabit: "",
  pets: "",
  zodiac: "",
  communicationStyle: "",
  loveLanguage: "",

  // Interests And Hobbies
  foodAndDrink: [],
  gaming: [],
  goingOut: [],
  music: [],
  outdoorAndAdventure: [],
  SocialAndContent: [],
  SportsAndFitness: [],
  stayingIn: [],
  tvAndMovies: [],
  valuesAndCauses: [],
  wellnessAndLifeStyle: [],

  // Blocked Contacts
  blockedContact: [],
};

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof WelcomeState; value: string }>
    ) => {
      const { field, value } = action.payload;
      if (Array.isArray(state[field])) return;
      //   @ts-ignore
      state[field] = value;
    },
    updateArrayInput: (
      state,
      action: PayloadAction<{ field: keyof WelcomeState; valueArray: string[] }>
    ) => {
      const { field, valueArray } = action.payload;
      if (Array.isArray(state[field])) {
        // @ts-ignore
        state[field] = valueArray;
      }
    },
    resetInputs: () => initialState,
  },
});

export const { updateField, updateArrayInput, resetInputs } =
  welcomeSlice.actions;

export default welcomeSlice.reducer;
