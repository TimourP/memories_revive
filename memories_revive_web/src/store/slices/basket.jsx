import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../services/axios";

export const fetchBasket = createAsyncThunk("basket/fetchBasket", async () => {
	const response = await axios.get(`/basket`);
	return response.data;
});

export const addToBasket = createAsyncThunk(
	"basket/addToBasket",
	async ({ id, amount }) => {
		const response = await axios.post(`/basket/product/${id}`);
		return response.data;
	}
);

export const removeFromBasket = createAsyncThunk(
	"basket/removeFromBasket",
	async ({ id, amount }) => {
		const response = await axios.delete(`/basket/product/${id}`);
		return response.data;
	}
);

const basketSlice = createSlice({
	name: "basket",
	initialState: {},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBasket.fulfilled, (state, { payload }) => {
			return payload;
		});
	},
});

export const basketMethods = {
	fetchBasket,
	addToBasket,
	removeFromBasket,
};

export default basketSlice;
