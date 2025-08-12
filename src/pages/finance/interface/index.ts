export interface SearchType{
    contractNo:string;
    person:string;
    tel:string
}

export interface DataType {
    key:string;
    contractNo:string;
    type:string;
    name:string;
    startDate:string;
    endDate:string;
    jia:string;
    yi:string;
    status:string
}

export interface ContractSearchParams extends SearchType {
    pageNum:number;
    pageSize:number;
}
