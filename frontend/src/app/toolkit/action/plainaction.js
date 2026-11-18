
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchplain = createAsyncThunk("anime/fetchplain", async () => {
    try {
        const data = await axios.get("http://localhost:4000/api/categories/67cf15b24539ccbf08d28da6");
        console.log(data.data);

        return data.data;
    } catch (error) {
        throw new Error(error);
    }
});