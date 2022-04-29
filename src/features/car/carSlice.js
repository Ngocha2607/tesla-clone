import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model X", "Model Y", "Model 3"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const {} = carSlice.actions;

export default carSlice.reducer;
