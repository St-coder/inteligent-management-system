import {post, get} from "../utils/request"
import {ContractSearchParams, DataType} from '@/pages/finance/interface/index'

export function getContractList(data: ContractSearchParams,){
    return post("/contractList", data)
}