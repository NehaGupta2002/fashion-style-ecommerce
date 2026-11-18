
import { createSlice } from "@reduxjs/toolkit";
import { fetchmarvel } from "../action/marvelaction";

const initialState = {
    products: [],
    errors: [],
    status: "idle",
    comment: ""
};

const animeslice = createSlice({
    name: "marvel",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchmarvel.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchmarvel.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload.products || []; // adjust based on actual API
            })
            .addCase(fetchmarvel.rejected, (state, action) => {
                state.status = "failed";
                state.errors.push(action.payload);
            });
    }
});

export const productActions = animeslice.actions;
export default animeslice.reducer;
