
import { createSlice } from "@reduxjs/toolkit";
import { fetchplain } from "../action/plainaction";

const initialState = {
    products: [],
    errors: [],
    status: "idle",
    comment: ""
};

const plainslice = createSlice({
    name: "plain",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchplain.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchplain.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload.products || []; // adjust based on actual API
            })
            .addCase(fetchplain.rejected, (state, action) => {
                state.status = "failed";
                state.errors.push(action.payload);
            });
    }
});

export const productActions = plainslice.actions;
export default plainslice.reducer;
