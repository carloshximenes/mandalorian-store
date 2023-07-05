import { useContext } from "react"
import { EquipmentContext } from "../context/EquipmentContext"

export const useEquipmentContext = () => {
    const { ...props } = useContext(EquipmentContext);
    return { ...props };
}