import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder } from '../../API/ordersAPI';
import { Cart } from '../../types/cartType';

export const postCart = createAsyncThunk('cart/post', async (payload: Cart) => {
	const result = await createOrder(payload);
	return result;
});
