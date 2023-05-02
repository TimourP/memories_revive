import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../services/axios"



export const fetchBasket = createAsyncThunk(
	"basket/fetchBasket",
	async () => {
		const response = await axios.get(`/basket`);
		return response.data;
	}
)

const basketSlice = createSlice({
	name: "basket",
	initialState: {},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBasket.fulfilled, (state, { payload }) => {
			return payload;
		})
	}
})

export const basketMethods = {
	fetchBasket,
}

export default basketSlice