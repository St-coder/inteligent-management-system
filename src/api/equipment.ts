import { post } from "@/utils/request";
import { EquipmentSearchData } from "@/pages/equipment/interface";


export function getEquipmentList(data: EquipmentSearchData) {
    return post('/equipmentList', data)
}