import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import equipmentReducer from '../slices/equipmentSlice';
import cartReducer from '../slices/cartSlice';

const store = configureStore({
	reducer: { equipment: equipmentReducer, cart: cartReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
