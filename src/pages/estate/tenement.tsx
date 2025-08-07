
import { Row, Col, Button, Input, Card,Table,Tag, Progress,Badge, Popconfirm   } from "antd"
import { useCallback, useMemo, useState } from "react"
import type { TableColumnsType } from 'antd';
import type { TableProps } from 'antd';
import EditTenement from "./components/EditTenement";
import { DataType } from './interface';


function Room() {
    const [formData, setFormData] = useState({
        name:"",
        manager:"",
    })
    const handleFormData=(e:any)=>{
        console.log(e, 777);
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const resetForm=()=>{
        setFormData({
            name:"",
            manager:"",
        })
        getList()
    }
    const getList=()=>{
        console.log(formData, 888);
    }

    const confirm = useCallback(()=>{
        
        },[])
    const cancel = useCallback(()=>{
        console.log('Cancel');
    }, [])

    
    const columns: TableProps<DataType>['columns'] = useMemo(() =>[

    { title: 'No.',dataIndex: 'name',key: 'name',
        render(text,record,index){
            return index+1
        }
    },
    { title: '楼宇名称',dataIndex: 'name',key: 'name', },
    { title: '负责人',dataIndex: 'manager',key: 'manager', },
    { title: '负责人电话',dataIndex: 'phone',key: 'phone', },
    { title: '使用状态',dataIndex: 'status',key: 'status',
        render(text) {
            return <Tag bordered={false} color={text === "1" ? 'green' : 'red'}>
                {text === "1" ? '正常' : '停用'}
            </Tag>
        }
    },
    { title: '空置率',dataIndex: 'emptyRate',key: 'emptyRate',
        render(text,record,index){
            return <Progress percent={Number(text)} size="small" />
        }
        },
    { title: '物业费率',dataIndex: 'propertyRate',key: 'propertyRate',
        render(text,record,index){
            return <Badge color="#f50" text={text} />                
        }
        },
    { title: '操作',dataIndex: 'operation',key: 'operation', 
        render(text,record,index){
            return <>
                <Button type="primary" onClick={()=>edit(record)}>编辑</Button>

                <Popconfirm
                    title="Delete the task"
                    description="确定要删除吗?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="是的"
                    cancelText="等一下"
                >
                    
                <Button type="dashed" className="ml" onClick={()=>confirmDelete(record.id)}>删除</Button>
                </Popconfirm>

            </>
        }
    },
], [])
    

const [dataSource, setDataSource] = useState<DataType[]>([
    {
        id: '1',
        name: "2",
        manager: 678,          // 保持 number 类型
        phone: "4",
        status: "1",
        emptyRate: "2",
        propertyRate: "2",
    }
])


const [visble, setVisible   ] = useState<boolean>(false);
const [title, setTitle] = useState<string>('新增');
const [rowData, setRowData] = useState<DataType>()

const hideModal=()=>{
    setVisible(false)
}

    const edit=(record:DataType)=>{
        setTitle('编辑楼宇')
        setRowData(record)
        setVisible(true)
        console.log(record, 111);
    }
    const confirmDelete=(id:string)=>{
        console.log(id, 222);
    }
    return (
        <div className="search">
            <Card>
                <Row gutter={16}>
                    <Col span={7}>
                        <p>楼宇名称:</p>
                        <Input name='name' value={formData.name} onChange={handleFormData} placeholder="请输入企业名称" />
                    </Col>
                    <Col span={7}>
                        <p>负责人：</p>
                        <Input name='manager' value={formData.manager} onChange={handleFormData} placeholder="请输入联系人" />
                    </Col>
                    <Col span={10}>
                        <Button type="primary" onClick={getList}>查询</Button>
                        <Button className="ml" onClick={resetForm}>重置</Button>
                    </Col>
                </Row>
            </Card>

            <Table columns={columns} dataSource={dataSource} pagination={false} rowKey={(record) => record.id} />
            <EditTenement  visible={visble} title={title} rowData={rowData} hideModal={hideModal}  getList={getList}/>

        </div>
    )
}

export default Room