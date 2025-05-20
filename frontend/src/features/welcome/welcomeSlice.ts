import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  WelcomeState,
  Into,
} from "../../constants/Itypescript/welcomeState";

// Initial State
const initialState: WelcomeState = {
  name: "",
  dob: "",
  gender: "",
  phone: "",

  sexualOrientation: "",
  showsexualOrientation: false,

  interestedIn: "",
  lookingFor: "",

  school: "",
  educationLevel: "",
  work: "",

  drinkingHabit: "",
  smokingHabit: "",
  workoutHabit: "",

  loveLanguage: "",

  into: [],

  blockedContact: [],
};

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{
        field: keyof WelcomeState;
        value: string | boolean;
      }>
    ) => {
      const { field, value } = action.payload;

      // Type narrowing: Avoid array fields here
      if (Array.isArray(state[field])) return;

      (state[field] as string | boolean) = value;
    },

    updateInto: (state, action: PayloadAction<Into[]>) => {
      // Ensure only up to 5 items in into
      state.into = action.payload.slice(0, 5);
    },

    updateBlockedContacts: (state, action: PayloadAction<string[]>) => {
      state.blockedContact = action.payload;
    },

    resetInputs: () => initialState,
  },
});

export const { updateField, updateInto, updateBlockedContacts, resetInputs } =
  welcomeSlice.actions;

export default welcomeSlice.reducer;
