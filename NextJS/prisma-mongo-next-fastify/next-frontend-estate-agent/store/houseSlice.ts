import { Property} from "../../prisma-estate-agent/node_modules/.prisma/client";

import { createSlice } from "@reduxjs/toolkit";
import { HouseWithAddress } from "../types";
// Type for our state
export interface HouseState {
  houses: HouseWithAddress[];
  location: string;
  searched: boolean;
}

// Initial state
const initialState: HouseState = {
  houses: [],
  location: "",
  searched: false,
};

// Actual Slice
export const houseSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setHouses(state, action) {
      state.houses = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setSearched(state, action) {
      state.searched = action.payload;
    }
  }
});

export const { setHouses, setLocation, setSearched } = houseSlice.actions;

export default houseSlice.reducer;
