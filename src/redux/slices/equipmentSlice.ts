import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Equipment } from "../../types/equipmentType"
import { findEquipments } from '../actions/equipmentAction';

type EquipmentState = {
    equipments: Equipment[];
}

const initialState: EquipmentState = {
    equipments: []
}

const setEquipments = (state: EquipmentState, action: PayloadAction<Equipment[]>) => {
	state.equipments = action.payload;
};

export const equipmentsSlice = createSlice({
	name: 'equipments',
	initialState,
	reducers: {
		setEquipments,
	},
	extraReducers: builder => {
		builder.addCase(findEquipments.fulfilled, setEquipments);
	},
});

export const equipmentActions = equipmentsSlice.actions;
export default equipmentsSlice.reducer;