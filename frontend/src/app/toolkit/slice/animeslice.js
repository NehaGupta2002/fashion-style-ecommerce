
import { createSlice } from "@reduxjs/toolkit";
import { fetchanime } from "../action/animaction";

const initialState = {
    products: [],
    errors: [],
    status: "idle",
    comment: ""
};

const animeslice = createSlice({
    name: "anime",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchanime.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchanime.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload.products || []; // adjust based on actual API
            })
            .addCase(fetchanime.rejected, (state, action) => {
                state.status = "failed";
                state.errors.push(action.payload);
            });
    }
});

export const productActions = animeslice.actions;
export default animeslice.reducer;
