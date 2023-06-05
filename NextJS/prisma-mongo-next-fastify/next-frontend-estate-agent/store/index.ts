import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";
import { houseSlice } from "./houseSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    house: houseSlice.reducer,
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
