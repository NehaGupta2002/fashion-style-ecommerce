
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchsanatan = createAsyncThunk("anime/fetchsantana", async () => {
    try {
        const data = await axios.get("http://localhost:4000/api/categories/67cf15814539ccbf08d28da0");
        console.log(data.data);

        return data.data;
    } catch (error) {
        throw new Error(error);
    }
});