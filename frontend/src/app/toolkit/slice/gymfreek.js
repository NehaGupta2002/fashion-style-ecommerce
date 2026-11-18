
import { createSlice } from "@reduxjs/toolkit";
import { fetchgymfreek } from "../action/gymfreek";

const initialState = {
    products: [],
    errors: [],
    status: "idle",
    comment: ""
};

const gymslice = createSlice({
    name: "gym",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchgymfreek.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchgymfreek.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload.products || []; // adjust based on actual API
            })
            .addCase(fetchgymfreek.rejected, (state, action) => {
                state.status = "failed";
                state.errors.push(action.payload);
            });
    }
});

export const productActions = gymslice.actions;
export default gymslice.reducer;
