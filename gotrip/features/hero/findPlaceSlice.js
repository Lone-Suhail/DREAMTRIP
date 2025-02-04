import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    
    { id: 2, name: "Tour", icon: "icon-destination" },
    
  ],
  currentTab: null,
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
