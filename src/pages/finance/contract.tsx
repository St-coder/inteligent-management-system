import { Row, Col, Button, Card, Table, Input,Tag, Pagination} from 'antd'
import type { TableProps } from 'antd';
import type { PaginationProps } from 'antd';

import { use, useState,useEffect } from 'react'

import { SearchType, DataType } from './interface'
import { getContractList } from '../../api/contract'
import { useDispatch, useSelector } from 'react-redux';
import { setData, setTotal } from '@/store/contractSlice';


function Contract(){
    const dispatch = useDispatch();
    const {data, total} = useSelector((state:any) => state.contractReducer);

    const [formData, setFormData]=useState<SearchType>({
        contractNo:"",
        person:"",
        tel:"",
    })

    const handleFormData = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    // const [data, setData]=useState<DataType[]>([]);
    const [loading, setLoading]=useState(false);
    const [pageNum, setPageNum]=useState(1);
    const [pageSize, setPageSize]=useState(10);
const loadData = async() => {
    setLoading(true);
    let {data:{list,total}} = await getContractList({
       ...formData,
        pageNum,
        pageSize,
    })
    setLoading(false);

    dispatch(setData(list));
    dispatch(setTotal(total));
};
    const getList = () => { 
            loadData();
    };
const reset = () => {
    setFormData({
        contractNo:"",
        person:"",
        tel:"",
    })
    getList();
}


useEffect(()=>{
    loadData()
},[pageNum,pageSize])


const changePage:PaginationProps["onChange"] = (page:number,    pageSize:number) => {
    setPageNum(page);
    setPageSize(pageSize);
}

    const detail=(contractNo:string)=>{
        // setDetailVisible(true);
    }

    const columns:TableProps<DataType>["columns"]=[
        {
            title:"No.",
            key:"index",
            render(_,__,index){
                return index+1
            }
        },
        {
            title:"合同编号",
            dataIndex:"contractNo",
            key:"contractNo"
        },
        {
            title:"合同类别",
            dataIndex:"type",
            key:"type"
        },
        {
            title:"合同名称",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"合同开始日期",
            dataIndex:"startDate",
            key:"startDate"
        },
        {
            title:"合同结束如期",
            dataIndex:"endDate",
            key:"endDate"
        },
        {
            title:"甲方",
            dataIndex:"jia",
            key:"jia"
        },
        {
            title:"乙方",
            dataIndex:"yi",
            key:"yi"
        },
        {
            title:"审批状态",
            dataIndex:"status",
            key:"status",
            render(value){
                if(value==1){
                  return  <Tag>未审批</Tag>
                }else if(value==2){
                    return <Tag color="green">审批通过</Tag>
                }else{
                    return <Tag color="red">审批拒绝</Tag>
                }
            }
        },
        {
            title:"操作",
            key:"operate",
            render(_,record){
                return <Button type="primary" size="small" onClick={()=>detail(record.contractNo)}>合同详情</Button>
            }
        },
    ]

    return <div className="search">
       <Card>
            <Row gutter={16}>
                <Col span={7}>
                    <p>合同名称</p>
                    <Input name='contractNo' value={formData.contractNo} onChange={handleFormData} placeholder="请输入合同名称" />
                </Col>
                <Col span={7}>
                    <p>联系人</p>
                    <Input name='person' value={formData.person} onChange={handleFormData} placeholder="请输入联系人" />
                </Col>
                <Col span={7}>
                    <p>联系电话</p>
                    <Input name='tel' value={formData.tel} onChange={handleFormData} placeholder="请输入联系电话" />
                </Col>
                <Col span={3}>
                    <Button type="primary" onClick={getList}>查询</Button>
                    <Button className='ml' onClick={reset}>重置</Button>
                </Col>
            </Row>
        </Card>

        <Card >
            <Table columns={columns} dataSource={data} pagination={false} loading={loading}  rowKey={(record) => record.contractNo}/>

            <Pagination className='mt' showQuickJumper showSizeChanger total={total} current={pageNum} pageSize={pageSize} onChange={changePage} />
        </Card>

    </div>
}

export default Contract