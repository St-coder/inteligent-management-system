export interface IAccountType {
    accountName: string
}
export interface SearchAccountType extends IAccountType {
    page: number;
    pageSize: number;
}
export interface AccountListType {
    id: number;
    accountName: string;
    auth: string;
    person: string;
    tel: string;
    department: string;
    menu:MenuType[];
}

export  interface MenuType{
    label:string;
    icon:string;
    key:string;
    children?:MenuType[]
}