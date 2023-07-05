import { ReactNode, useEffect, useMemo, useState } from "react";
import { EquipmentParams } from "../../../types/equipmentParamsType";
import { useAppDispatch } from "../../../redux/hooks";
import { findEquipments } from "../../../redux/actions/equipmentAction";
import { Equipment } from "../../../types/equipmentType";
import { EquipmentContext } from '../context/EquipmentContext';


type EquipmentProviderProps = {
  children?: ReactNode;
};

export function EquipmentProvider({ children }: EquipmentProviderProps) {
    const [equipmentParams, setEquipmentParams] = useState<EquipmentParams>({});
    const [equipments, setEquipments] = useState<Equipment[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchData() {
            const { payload } = await dispatch(findEquipments(equipmentParams));
            setEquipments(payload as Equipment[]);
        }
        fetchData();
    }, [dispatch, equipmentParams]);

    const equipmentProviderValue = useMemo(() => ({equipments, equipmentParams, setEquipmentParams}), [equipmentParams, equipments]);

    return <EquipmentContext.Provider value={equipmentProviderValue}>{children}</EquipmentContext.Provider>
}