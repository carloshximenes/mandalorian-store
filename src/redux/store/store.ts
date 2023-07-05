import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import equipmentReducer from '../slices/equipmentSlice';

const store = configureStore({
	reducer: { equipment: equipmentReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
