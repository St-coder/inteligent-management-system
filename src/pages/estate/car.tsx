import { render } from '@testing-library/react';
import { Row, Col, Button, Table, Input, Tabs, Image, Card } from 'antd';
import type { TabsProps, TableProps } from 'antd';
import { useState } from 'react';
import { CarDataType, ChargeDataType } from './interface';
import come from "@/assets/come.jpg"


function Car() {

    const columns: TableProps<ChargeDataType>['columns'] = [
        {
            title: 'No.',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: '订单编号',
            dataIndex: 'orderNo',
            key: 'orderNo',
        },
        {
            title: '订单日期',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '车牌号码',
            dataIndex: 'carNo',
            key: 'carNo',
        },
        {
            title: '车辆类型',
            dataIndex: 'type',
            key: 'type',

        },
        {
            title: '充电开始时间',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: '充电时长',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '充电量',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: '充电费用',
            dataIndex: 'cost',
            key: 'cost',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            render: (text, record) => {
                return <>
                    <Button type="primary" size="small">查看</Button>
                </>
            }
        },
    ];

    const dataSource: TableProps<ChargeDataType>['dataSource'] = [
        {
            key: '1',
            orderNo: 'CD9872380',
            date: "2024-02-13",
            carNo: '京A88888',
            type: "自有车辆",
            startDate: "2024-02-13 15:33:12",
            time: "2小时25分钟",
            count: "30kw",
            cost: "¥40.50"
        },
        {
            key: '2',
            orderNo: 'CD9872381',
            date: "2024-02-13",
            carNo: '京A88889',
            type: "自有车辆",
            startDate: "2024-02-13 15:33:12",
            time: "2小时25分钟",
            count: "30kw",
            cost: "¥40.50"
        },
        {
            key: '3',
            orderNo: 'CD9872381',
            date: "2024-02-13",
            carNo: '京A88889',
            type: "自有车辆",
            startDate: "2024-02-13 15:33:12",
            time: "2小时25分钟",
            count: "30kw",
            cost: "¥40.50",
        }
    ]


    const carColums: TableProps<CarDataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: '车牌号',
        dataIndex: 'carNo',
        key: 'carNo',

    },
    {
        title: '车主姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '车主电话',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: '租赁类型',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: '租期剩余',
        dataIndex: 'rest',
        key: 'rest',
    },
    {
        title: '超期天数',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '入场照片',
        dataIndex: 'pic',
        key: 'pic',
        render: (text) => <Image
            src={text || come}
            width={50}
            placeholder={
                <Image
                    preview={false}
                    src={text || come}
                    width={150}
                />
            }
        />
    },

    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return <>
                <Button type="primary" size="small" className='mr'>编辑</Button>
                <Button type="primary" size="small" danger>删除</Button>
            </>
        }
    },

];

    const carDataSource: TableProps<CarDataType>['dataSource'] = [
        {
            key: '1',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },
        {
            key: '2',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },
        {
            key: '3',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },
        {
            key: '4',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },
        {
            key: '5',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },
        {
            key: '6',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },
        {
            key: '7',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },
        {
            key: '8',
            carNo: '京A88888',
            name: "王丽",
            tel: "18876543210",
            type: '长租车',
            rest: "135天",
            time: "0天",
            pic: "",
        },

    ];
    const [activeKey, setActiveKey] = useState('1');
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '充电记录',
            children: <Table dataSource={dataSource} columns={columns} />
        },
        {
            key: '2',
            label: '园内车辆列表',
            children: <Table dataSource={carDataSource} columns={carColums} />
        },
    ];
    const onChange = (key: string) => {
        setActiveKey(key)
    };

    return (
        <div className='car-container'>
            <Card className='mt'>
                <Row>
                    <Col span={7}>
                        <Input placeholder="请输入车牌号、手机号、联系人" />
                    </Col>
                    <Col span={7} className='ml'>
                        <Button type="primary">查询</Button>
                    </Col>
                </Row>
            </Card>

            <Card className='mt'>
                <Tabs defaultActiveKey={activeKey} items={items} onChange={onChange} />
                {/* {activeKey === '1' && <Table dataSource={dataSource} columns={columns} />}
                {activeKey === '2' && <Table dataSource={dataSource} columns={columns} />} */}

            </Card>
        </div>

    )
}
export default Car