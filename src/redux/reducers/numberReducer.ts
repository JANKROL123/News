import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NumberInitialState {
    number: number;
}

const initialState: NumberInitialState = {
    number: 0
}

export const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.number = state.number + action.payload;
        }
    }
});

export const {increment} = numberSlice.actions;
export default numberSlice.reducer;