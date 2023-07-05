import { Dispatch, SetStateAction } from "react";
import { EquipmentParams } from "../../../types/equipmentParamsType"
import { Equipment } from "../../../types/equipmentType";

export type EquipmentContextType = {
    equipmentParams: EquipmentParams;
    setEquipmentParams: Dispatch<SetStateAction<EquipmentParams>>;
    equipments: Equipment[];
}