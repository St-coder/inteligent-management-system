import { post } from "../utils/request";

interface loginData {
    userName: string,
    password: string,
}
export function login(data:loginData){
    return post("/login", data)
}