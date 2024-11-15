import { dcpBaseReducer } from "@/config/redux-saga/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0
}

const baseSlice = createSlice({
    name: dcpBaseReducer,
    initialState: initialState,
    reducers: {
        addNumberAction: (state) => {
            state.number += 1;
        }
    }
});

export const { addNumberAction } = baseSlice.actions;

export default baseSlice.reducer;