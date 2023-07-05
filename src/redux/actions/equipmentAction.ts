import { createAsyncThunk } from '@reduxjs/toolkit';
import { getEquipments } from '../../API/equipmentAPI';
import { EquipmentParams } from '../../types/equipmentParamsType';

export const findEquipments = createAsyncThunk('equipments/get', async (params: EquipmentParams) => {
	const equipments = await getEquipments(params);
    return equipments;
});