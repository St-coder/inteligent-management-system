export interface DataType{
    id:string;
    name:string;
    status:string;
    tel:string;
    business:string;
    email:string;
    creditCode:string;
    industryNum:string;
    organizationCode:string;
    legalPerson:string;
}

export interface SearchType{
    page?:number;
    pageSize?:number;
    companyName?:string;
    contact?:string;
    tel?:string;
}

export interface ModalProps{
    isModalOpen: boolean;
    hideModal: () => void;
    title: string;
    loadData: () => void;
}