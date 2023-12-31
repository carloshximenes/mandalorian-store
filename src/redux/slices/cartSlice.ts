import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../../types/cartType';

type CartState = {
	cart: Cart;
};

const initialState: CartState = {
	cart: {
		name: '',
		deliveryAddress: '',
		items: [],
	},
};

const setCart = (state: CartState, action: PayloadAction<Cart>) => {
	state.cart = action.payload;
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart,
	},
});

export const equipmentActions = cartSlice.actions;
export default cartSlice.reducer;
