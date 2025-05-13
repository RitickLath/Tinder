import { configureStore } from "@reduxjs/toolkit";
import welcomeSlice from "../features/welcome/welcomeSlice";

export const store = configureStore({
  reducer: {
    welcome: welcomeSlice,
  },
});

// TS: Copied from Docs
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
