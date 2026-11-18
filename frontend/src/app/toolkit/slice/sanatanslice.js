
import { createSlice } from "@reduxjs/toolkit";
import { fetchsanatan } from "../action/sanatanaction";


const initialState = {
    products: [],
    errors: [],
    status: "idle",
    comment: ""
};

const sanatanslice = createSlice({
    name: "sanatan",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchsanatan.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchsanatan.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload.products || []; // adjust based on actual API
            })
            .addCase(fetchsanatan.rejected, (state, action) => {
                state.status = "failed";
                state.errors.push(action.payload);
            });
    }
});

export const productActions = sanatanslice.actions;
export default sanatanslice.reducer;
