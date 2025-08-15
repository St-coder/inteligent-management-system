import * as XLSX from "xlsx";
import {saveAs} from "file-saver";
export function exportToExcel(data:any,header:string[]){
  const headerPlay = {
        accountNo: '账单号',
        status: '缴费状态',
        roomNo: '房屋号',
        carNo: '车牌号',
        tel: '手机号',
        costName1: '物业费(年)',
        costName2: '车位费',
        costName3: '房屋租金',
        startDate: '开始时间',
        endDate: '结束时间',
        preferential: '优惠金额',
        money: '合计应收金额',
        pay: '支付方式',
    }

    const ws=XLSX.utils.json_to_sheet(
        [headerPlay,...data],{header, skipHeader: true}
    );
  //创建一个工作簿
  const wb=XLSX.utils.book_new()
  //把我们的工作表加到工作簿中      
  XLSX.utils.book_append_sheet(wb,ws,"sheet1");
   //转成二进制数据     
 const buf=XLSX.write(wb,{bookType:"xlsx",type:"buffer"});
 //保存和下载
 saveAs(new Blob([buf],{type:"application/octet-stream"}),"selected-data.xlsx") 
}