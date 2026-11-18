
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchanime = createAsyncThunk("anime/fetchanime", async () => {
    try {
        const data = await axios.get("http://localhost:4000/api/categories/67cf15144539ccbf08d28d9a");
        console.log(data.data);

        return data.data;
    } catch (error) {
        throw new Error(error);
    }
});