import {  get } from "../utils/request";

export function getEnergyData(){
    return get("/energyData")
}
export function getCompanyData(){
    return get("/getCompanyData")
}

