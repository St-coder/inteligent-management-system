import {post, get} from "../utils/request"
import {ContractSearchParams, BillSearchData} from '@/pages/finance/interface/index'

export function getContractList(data: ContractSearchParams,){
    return post("/contractList", data)
}

export function getBillList(data:BillSearchData){
    return post("/billList",data)
}