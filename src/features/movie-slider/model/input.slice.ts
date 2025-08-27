import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
};

const inputSlice = createSlice({
	name: "inputSlice",
	initialState,
	reducers: {
		setInput: (state, action) => {
			return { value: action.payload };
		},
	},
});

export const { setInput } = inputSlice.actions;
export const inputReducer = inputSlice.reducer;
