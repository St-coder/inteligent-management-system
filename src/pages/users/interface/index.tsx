export interface DataType{
    id:string;
    name:string;
    status:string;
    tel:number;
    business:string;
    email:string;
    creditCode:string;
    industryNum:string;
    organizationCode:string;
    legalPerson:string
}

export interface SearchType{
    page?:number;
    pageSize?:number;
    companyName?:string;
    contact?:string;
    tel?:string;
}