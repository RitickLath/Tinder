import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WelcomeState } from "../../constants/Itypescript/welcomeState";

// Initial State
const initialState: WelcomeState = {
  name: "Ritick",
  dob: "",
  gender: "Male",
  phone: "",

  sexualPreference: "Straight",
  seekingFor: "Female",
  lookingFor: "Relationship",
  distance: "10",

  school: "",
  educationLevel: "Bachelors",
  workoutHabit: "Sometimes",

  drinkingHabit: "Occasionally",
  pets: "No",
  zodiac: "Aries",
  communicationStyle: "Direct",
  loveLanguage: "Words of affirmation",

  foodAndDrink: [],
  gaming: [],
  goingOut: [],
  music: [],
  outdoorAndAdventure: [],
  socialAndContent: [],
  sportsAndFitness: [],
  stayingIn: [],
  tvAndMovies: [],
  valuesAndCauses: [],
  wellnessAndLifestyle: [],

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
      (state[field] as string) = value;
    },
    updateArrayInput: (
      state,
      action: PayloadAction<{ field: keyof WelcomeState; valueArray: string[] }>
    ) => {
      const { field, valueArray } = action.payload;
      if (Array.isArray(state[field])) {
        (state[field] as string[]) = valueArray;
      }
    },
    resetInputs: () => initialState,
  },
});

export const { updateField, updateArrayInput, resetInputs } =
  welcomeSlice.actions;

export default welcomeSlice.reducer;
