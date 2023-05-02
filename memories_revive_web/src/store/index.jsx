import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/products';
import basketSlice from './slices/basket';


export const store = configureStore({
	reducer: {
		products: productsSlice.reducer,
		basket: basketSlice.reducer,
	}
});