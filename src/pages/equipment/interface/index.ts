export interface DataType {
    id:number
    no: string,
    name: string;
    person: string;
    tel: number;
    time: string;
    rest: string;
    status: string;
    last: string;
    type: string;
    from: string
}

export interface EquipmentSearchData extends SearchDataType {
    page: number;
    pageSize: number;
}

export interface SearchDataType {
    name?: string;
    person?: string;
}