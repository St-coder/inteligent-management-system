import { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, Row, Col,Input,Button,Table,Pagination,Popconfirm, Tag, message } from 'antd';
import type { TableProps } from 'antd';
import type { DataType, SearchType } from './interface';
import{ getUserList, deleteUser, batchDeleteUser } from '@/api/userList'
import UserForm from "./components/UserForm";
import { setUserData } from "@/store/userSlice";
import { useDispatch } from 'react-redux';

function Users(){
    const dispatch = useDispatch()
    async function batchDelete(){
        const {data} = await batchDeleteUser(selectedRowKeys)
        message.success(data || '删除成功')
        setSelectedRowKeys([])
        loadData()
    }
    function onChange(page: number, pageSize: number, ) {
        setPage(page);
        setPageSize(pageSize);
    }

    
    
    const [loading, setLoading] = useState<boolean>(false);
    const columns: TableProps<DataType>['columns'] = [
        {
            title: "No.",
            key: "index",
            render(value, record, index) {
                return index + 1
            },
        },
        {
            title: "客户名称",
            key: "name",
            dataIndex: "name"
        },
        {
            title: "经营状态",
            key: "status",
            dataIndex: "status",
            render(value){
                if(value===1){
                    return <Tag color="green">营业中</Tag>
                }else if(value===2){
                    return <Tag color="#f50">暂停营业</Tag>
                }else if(value===3){
                    return <Tag color="red">已关闭</Tag>
                }
            }
        },
        {
            title: "联系电话",
            key: "tel",
            dataIndex: "tel",
        },
        {
            title: "所属行业",
            key: "business",
            dataIndex: "business"
        },
        {
            title: "邮箱",
            key: "email",
            dataIndex: "email"
        },
        {
            title: "统一信用代码",
            key: "creditCode",
            dataIndex: "creditCode"
        },
        {
            title: "工商注册号",
            key: "industryNum",
            dataIndex: "industryNum"
        },
        {
            title: "组织结构代码",
            key: "organizationCode",
            dataIndex: "organizationCode"
        },
        {
            title: "法人名",
            key: "legalPerson",
            dataIndex: "legalPerson"
        },
        {
            title: "操作",
            key: "operate",
            render(value, record, index) {                
                return <>
                    <Button type="primary" size="small" onClick={()=>edit(record)}>编辑</Button>
                    <Popconfirm 
                        title="删除确认"
                        description="确定要删除吗？"
                        okText="是"
                        cancelText="否"
                        onConfirm={()=>confirm(record.id)}
                    >
                         <Button type="primary" danger className="ml" size="small" >删除</Button>
                    </Popconfirm>
                   
                </>
            },
        }
    ];
    const [dataList, setDataList] = useState<DataType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [formData, setFormData] = useState<SearchType>({
        companyName:"",
        contact:"",
        tel:"",
    })

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const onSelectedChange = (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection: TableProps<DataType>['rowSelection'] = {
        type: 'checkbox',   
        selectedRowKeys,
        onChange: onSelectedChange,
    }
    const disabled = useMemo(()=>{
        return !selectedRowKeys.length
    }, [selectedRowKeys])

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('新增');
    
    const  add= ()=>{
        setTitle('新增企业')
        dispatch(setUserData({}))
        setIsModalOpen(true)
    }


    const loadData = async () => {
        setLoading(true)
        const { data: { list, total } } = await getUserList({ ...formData, page, pageSize });
        setLoading(false)
        setDataList(list)
        setTotal(total)
    }

    useEffect(()=>{
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page,pageSize])

    const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    function reset(){
        setFormData({
            companyName:"",
            contact:"",
            tel:"",
        })
        setSelectedRowKeys([])
        setPage(1);
        setPageSize(10);
    }

    const confirm = async (id:string) => {
        const {data} = await deleteUser(id);
        message.success(data || '成功')
        loadData();
    }
    const edit = (record: DataType) => {
        console.log(record);
        setTitle('编辑企业')
        dispatch(setUserData(record))
        setIsModalOpen(true)
    }
    const hideModal = useCallback(()=>{
        setIsModalOpen(false)
    },[])
    return <>
        <div className="users">
            <UserForm  isModalOpen={isModalOpen} hideModal={hideModal} title={title} loadData={loadData} />
            <Card className="search">
                <Row gutter={16}>
                    <Col span={7}>
                        <p>企业名称:</p>
                        <Input name='companyName' value={formData.companyName} onChange={handleFormData} placeholder="请输入企业名称" />
                    </Col>
                    <Col span={7}>
                        <p>联系人：</p>
                        <Input name='contact' value={formData.contact} onChange={handleFormData} placeholder="请输入联系人" />
                    </Col>
                    <Col span={7}>
                        <p>联系电话:</p>
                        <Input name='tel' value={formData.tel} onChange={handleFormData} placeholder="请输入联系电话" />
                    </Col>
                    <Col span={3}>
                        <Button type="primary" onClick={loadData}>查询</Button>
                    <Button className="ml" onClick={reset}>重置</Button>
                    </Col>
                </Row>
            </Card>
            <Card className="mt tr">
                <Button type="primary" onClick={add}>新增企业</Button>
                <Button danger type="primary" className="ml" disabled={disabled} onClick={batchDelete}>批量删除</Button>
            </Card>

            <Card className="mt">
            <Table
                columns={columns}
                dataSource={dataList}
                rowKey={(record) => record.id}
                loading={loading}   
                rowSelection={rowSelection}
                pagination={false}
            />
            <Pagination
                className="fr mt"
                total={total}
                current={page}
                pageSize={pageSize}
                showSizeChanger
                showQuickJumper
                showTotal={(total) => `共 ${total} 条`}
                onChange={onChange}
            />
        </Card>

        </div>
    </>
}
export default Users;