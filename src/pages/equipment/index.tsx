import { Card, Row, Col, Button, Table, Input, Pagination,Tag } from "antd"

import type { TableProps } from "antd"
import { useEffect, useState } from "react"
import  useDataList from "@/hooks/useDataList"
import { getEquipmentList } from "@/api/equipment"
import { DataType, SearchDataType } from "./interface"

function Equipment(){
    const columns:TableProps<DataType>["columns"]= [
        {
            title: "No.",
            key: "index",
            render: (text, record, index) => index + 1,
        },
        {
            title: '设备名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '设备编号',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: '负责人',
            dataIndex: 'person',
            key: 'person',
        },
        {
            title: '负责人电话',
            dataIndex: 'tel',
            key: 'tel',
        },
        {
            title: '理论寿命',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '剩余寿命',
            dataIndex: 'rest',
            key: 'rest',
        },
        {
            title: '使用状态',
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                if (text == 1) {
                    return <Tag color="green">使用中</Tag>
                } else if (text == 2) {
                    return <Tag color="yellow">维护中</Tag>
                } else {
                    return <Tag color="red">已损坏</Tag>
                }
            }
        },
        {
            title: '最近保养日期',
            dataIndex: 'last',
            key: 'last',
        },
        {
            title: '规格型号',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '生产厂家',
            dataIndex: 'from',
            key: 'from',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            render: () => {
                return <Button type="primary" size="small">详细</Button>
            }
        },
    ]


    const { formData, handleChange, reset, onChangePage,
        loadData, total, loading, dataList, page, pageSize, } = useDataList<SearchDataType, DataType>({name:'', person:''}, getEquipmentList)

    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={7}>
                    <p>设备名称：</p>
                    <Input name="name" value={formData.name} onChange={handleChange}  placeholder="请输入设备名称" />
                </Col>
                <Col span={7}>
                    <p>负责人：</p>
                    <Input name="person" value={formData.person} onChange={handleChange} placeholder="请输入负责人" />
                </Col>
                <Col span={3}>
                    <Button type='primary' className='mr' onClick={loadData}>查询</Button>
                    <Button onClick={reset}>重置</Button>
                </Col>
            </Row>
        </Card>

        <Card className="table mt"> 
            <Table loading={loading} rowKey={(record) => record.id} columns={columns} dataSource={dataList} pagination={false} />
            <Pagination className="fr mt" defaultCurrent={page} showQuickJumper current={page} 
                total={total} pageSize={pageSize} onChange={onChangePage} />
        </Card>

    </div>
}

export default Equipment