
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchmarvel = createAsyncThunk("anime/fetchmarvel", async () => {
    try {
        const data = await axios.get("http://localhost:4000/api/categories/67cf156a4539ccbf08d28d9d");
        console.log(data.data);

        return data.data;
    } catch (error) {
        throw new Error(error);
    }
});