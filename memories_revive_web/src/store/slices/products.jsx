import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../services/axios"



export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await axios.get(`/products`);
		return response.data;
	}
)

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			return payload;
		})
	}
})

export const productsMethods = {
	fetchProducts,
}

export default productsSlice