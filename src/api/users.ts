import { post, get } from "../utils/request";
import { SearchAccountType } from "@/pages/settings/interface";

interface loginData {
    userName: string,
    password: string,
}
export function login(data:loginData){
    return post("/login", data)
}

export function getMenuList(){
    return get("/menu")
}

export function getButtonList(){
    return get("/buttonList")
}

export function getAccountList(params: SearchAccountType){
    return post("/accountList", params)
}