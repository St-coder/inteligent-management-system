export interface DataType {
  id: string;
  name: string;
  manager: number;    // 保持 number 类型
  phone: string;
  status: string;
  emptyRate: string;
  propertyRate: string;
}

export interface ChargeDataType {
    key: string;
    orderNo: string;
    date: string;
    carNo: string;
    type: string;
    startDate: string;
    time: string;
    count: string;
    cost: string;
}

export interface CarDataType {
    key: string;
    carNo: string;
    name: string;
    tel: string;
    type: string;
    rest: string;
    time: string;
    pic: string;
}