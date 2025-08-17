import { Card, Table, Row, Col, Button, Input, Pagination, Tree, Popconfirm,  } from "antd"

import { useState, useEffect, } from "react"
import useDataList from "@/hooks/useDataList"
import{ IAccountType, AccountListType, SearchAccountType, MenuType } from "./interface"

import { getAccountList} from "@/api/users"

import type { PaginationProps, TableProps,TreeDataNode, TreeProps,  } from "antd"

import { useSelector } from "react-redux"

function Settings() {
    const columns:TableProps<AccountListType>['columns'] = [{
        title: '账号名称',
        dataIndex: 'accountName',
        key: 'accountName',
    }, {
        title: '权限',
        dataIndex: 'auth',
        key: 'auth',
    }, {
        title: '联系人',
        dataIndex: 'person',
        key: 'person',
    }, {
        title: '电话',
        dataIndex: 'tel',
        key: 'tel',
    }, {    
        title: '部门',
        dataIndex: 'department',
        key: 'department',
    }, {    
        title: '操作',
        key: 'operation',
        render(text: string, record: any){
        return <> 
        <Button type="primary" size="small" onClick={()=>{ edit(record.menu,record.accountName) }}>编辑</Button>
        <Popconfirm
                        title="操作提示"
                        description="确认要删除当前账号吗？"
                        okText="是"
                        cancelText="否"
                    >
                        {/* <AuthButton size="small" type="primary" danger>删除账号</AuthButton> */}
                        <Button size="small" type="primary" className="ml" danger>删除账号</Button>
                    </Popconfirm>


            </>
        }
    }]

    const {formData, handleChange, onChangePage, reset, dataList, total, loading, page, pageSize, loadData} 
            = useDataList<IAccountType,AccountListType>({accountName: ''}, getAccountList);

    const treeData: TreeDataNode[] = [
        {
            title: '工作台',
            key: '/dashboard',
        },
        {
            title: '租户管理',
            key: '/users',
            children: [
                { title: '租户列表', key: '/users/list' },
                { title: '新增租户', key: '/users/add' },
            ],
        },
        {
            title: '物业管理',
            key: '/estate',
            children: [
                {
                    title: "楼宇管理",
                    key: "/estate/tenement"
                },
                {
                    title: "房间管理",
                    key: "/estate/room"
                },
                {
                    title: "车辆信息",
                    key: "/estate/car"
                }

            ]
        },
        {
            title: '报修管理',
            key: '/repair',
        },
        {
            title: '财务管理',
            key: '/finance',
            children: [
                {
                    title: "合同管理",
                    key: "/finance/contract"
                },
                {
                    title: "合同详情",
                    key: "/finance/surrender"
                },
                {
                    title: "账单管理",
                    key: "/finance/bill"
                }
            ]
        },
        {
            title: '招商管理',
            key: '/merchants',
        },
        {
            title: '运营管理',
            key: '/operation',
            children: [
                {
                    title: "运营总览",
                    key: "/operation/all"
                },
                {
                    title: "文章发布",
                    key: "/operation/article"
                },
                {
                    title: "内容评论",
                    key: "/operation/comments"
                }
            ]
        },
        {
            title: '设备管理',
            key: '/equipment',
        },
        {
            title: '能源消耗',
            key: '/energy',
        },
        {
            title: '系统设置',
            key: "/settings",
        },
        {
            title: '个人中心',
            key: "/personal",
        },
    ];
    const [checkedKeys,setCheckedKeys]=useState<React.Key[]>([])
function extractTreeKeys(data:any){
    let keys:string[]=[];
    data.forEach((item:any)=>{
        if(item.children&&item.children.length>0){
            const childKeys:string[]=extractTreeKeys(item.children);
            keys=keys.concat(childKeys)
        }else{
            keys.push(item.key)
        }
    })
    return keys
}

const {menuList} = useSelector((state:any)=>state.authReducer)
    const [accountName,setAccountName]=useState<string>("当前用户")

const edit=(menu:MenuType[],accountName:string)=>{
            setAccountName(accountName);
           const newCheckedKeys=extractTreeKeys(menu) 
            setCheckedKeys(newCheckedKeys)
    }
useEffect(()=>{
        setCheckedKeys(extractTreeKeys(menuList))
    },[])



const onCheck:TreeProps['onCheck']=(checkedKeys)=>{

    console.log(checkedKeys, 888);
    
    setCheckedKeys(checkedKeys as React.Key[])
}
const handle=()=>{
        console.log(checkedKeys,accountName)
    }

   return <div>
        <Card>
            <Row gutter={16}>
                <Col span={8}>
                    <Input name="accountName" value={formData.accountName} onChange={handleChange} placeholder="请输入账号名称" />
                </Col>
                <Col span={8}>
                    <Button type="primary" onClick={loadData}>查询</Button>
                    <Button className="ml" onClick={reset}>重置</Button>
                </Col>
                <Col span={8}  className="tr">
                    <Button type="primary">新建账号</Button>
                </Col>
            </Row>
        </Card>


        <Row gutter={16} className="mt">
            <Col span={8}>
                <Card title={accountName+":所拥权限"}>
                    <Tree
                        checkable
                        onCheck={onCheck}
                        treeData={treeData}
                        checkedKeys={checkedKeys}
                    />
                </Card>

                <Card className="mt">
                    <Popconfirm
                        title="操作提示"
                        description={`您确认要修改${accountName}用户的权限吗？}`}
                        okText="是"
                        cancelText="否"
                        onConfirm={handle}
                    >
                        <Button type="primary">提交修改</Button>
                    </Popconfirm> 
                </Card>

            </Col>

            <Col span={16}>
                <Card title="账号列表">
                    <Table   columns={columns} dataSource={dataList} pagination={false} rowKey={(record) => record.id} />
                    <Pagination className="fr mt" total={total} onChange={ onChangePage } current={page} pageSize={pageSize} />
                </Card>
            </Col>
        </Row>

    </div>
}



export default Settings