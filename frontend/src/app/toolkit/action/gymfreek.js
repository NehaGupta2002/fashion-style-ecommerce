
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchgymfreek = createAsyncThunk("anime/fetchgym", async () => {
    try {
        const data = await axios.get("http://localhost:4000/api/categories/67cf15944539ccbf08d28da3");
        console.log(data.data);

        return data.data;
    } catch (error) {
        throw new Error(error);
    }
});