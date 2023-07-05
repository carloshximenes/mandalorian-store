
import axios from 'axios';
import { defaultApiUrl } from "../constants/urlConstants";
import { EquipmentParams } from "../types/equipmentParamsType";
import { Equipment } from "../types/equipmentType";

const equipmentUrl = `${defaultApiUrl}/equipments`;
const config = {
	params: {},
};

export const getEquipments = async (params: EquipmentParams) => {
    try {
            config.params = {...params};
            const { data } = await axios.get<Equipment[]>(equipmentUrl, config);
            return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}