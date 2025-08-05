import Mock from 'mockjs'
Mock.setup({
    timeout: "200-600"
})
Mock.mock('https://www.demo.com/login', "post", (options: any)=>{
    const { userName, } = JSON.parse(options.body)
    const arr = [
        {userName:'admin', token: 'adminxxx'},
        {userName:'manager', token: 'managerxxx'},
        {userName:'user', token: 'userxxx'},
    ]

    let obj = arr.find(it => it.userName===userName)    
    if(!obj) {
        return {
            code: 400,
            message: '登录失败',
            data: null,
        }
    }

    return {
            code: 200,
            message: '登录成功',
            data: {
                token: obj.token,
                userName: obj.userName,
            }
        }

})

const menuList = [
    {
        "icon": "DashboardOutlined",
        "label": "工作台",
        "key": "/dashboard",
    },
    {

        "icon": "TeamOutlined",
        "label": "租户管理",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "租户列表",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "新增租户",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "物业管理",
        "key": "/estate",
        "children": [
            {

                "icon": "InsertRowLeftOutlined",
                "label": "楼宇管理",
                "key": "/estate/tenement",

            },
            {
                "icon": "BankOutlined",
                "label": "房间管理",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "车辆信息",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "报修管理",
        "key": "/repair"
    },
    {
        "icon": "DollarOutlined",
        "label": "财务管理",
        "key": "/finance",
        "children": [
            {

                "icon": "ProfileOutlined",
                "label": "合同管理",
                "key": "/finance/contract",

            },
            {
                "icon": "FrownOutlined",
                "label": "合同详情",
                "key": "/finance/surrender",
            },
            {
                "icon": "FileTextOutlined",
                "label": "账单管理",
                "key": "/finance/bill",
            }
        ]
    },
    {
        "icon": "TransactionOutlined",
        "label": "招商管理",
        "key": "/merchants",
    },
    {
        "icon": "FundProjectionScreenOutlined",
        "label": "运营管理",
        "key": "/operation",
        "children": [
            {

                "icon": "FundViewOutlined",
                "label": "运营总览",
                "key": "/operation/all",

            },
            {
                "icon": "ReadOutlined",
                "label": "文章发布",
                "key": "/operation/article",
            },
            {
                "icon": "CommentOutlined",
                "label": "内容评论",
                "key": "/operation/comments",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "设备管理",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "能源消耗",
        "key": "/energy",
    },
    {
        "icon": "SettingOutlined",
        "label": "系统设置",
        "key": "/settings",
    },
    {
        "icon": "UserOutlined",
        "label": "个人中心",
        "key": "/personal",
    }
]

// const userMenuList = [
//     {
//         "icon": "DashboardOutlined",
//         "label": "工作台",
//         "key": "/dashboard",
//     },
//     {

//         "icon": "TeamOutlined",
//         "label": "租户管理",
//         "key": "/users",
//         "children": [
//             {
//                 "icon": "UnorderedListOutlined",
//                 "label": "租户列表",
//                 "key": "/users/list",
//             },
//             {
//                 "icon": "UserAddOutlined",
//                 "label": "新增租户",
//                 "key": "/users/add",
//             }
//         ]
//     },
//     {
//         "icon": "LaptopOutlined",
//         "label": "物业管理",
//         "key": "/estate",
//         "children": [
//             {

//                 "icon": "InsertRowLeftOutlined",
//                 "label": "楼宇管理",
//                 "key": "/estate/tenement",

//             },
//             {
//                 "icon": "BankOutlined",
//                 "label": "房间管理",
//                 "key": "/estate/room",
//             },
//             {
//                 "icon": "TruckOutlined",
//                 "label": "车辆信息",
//                 "key": "/estate/car",
//             }
//         ]
//     },
//     {
//         "icon": "ToolOutlined",
//         "label": "报修管理",
//         "key": "/repair"
//     },
//     {
//         "icon": "ToolOutlined",
//         "label": "设备管理",
//         "key": "/equipment",
//     },
//     {
//         "icon": "ThunderboltOutlined",
//         "label": "能源消耗",
//         "key": "/energy",
//     },
//     {
//         "icon": "UserOutlined",
//         "label": "个人中心",
//         "key": "/personal",
//     }
// ]

const managerMenuList = [
    {
        "icon": "DashboardOutlined",
        "label": "工作台",
        "key": "/dashboard",
    },
    {

        "icon": "TeamOutlined",
        "label": "租户管理",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "租户列表",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "新增租户",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "物业管理",
        "key": "/estate",
        "children": [
            {

                "icon": "InsertRowLeftOutlined",
                "label": "楼宇管理",
                "key": "/estate/tenement",

            },
            {
                "icon": "BankOutlined",
                "label": "房间管理",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "车辆信息",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "报修管理",
        "key": "/repair"
    },
    {
        "icon": "TransactionOutlined",
        "label": "招商管理",
        "key": "/merchants",
    },
    {
        "icon": "FundProjectionScreenOutlined",
        "label": "运营管理",
        "key": "/operation",
        "children": [
            {

                "icon": "FundViewOutlined",
                "label": "运营总览",
                "key": "/operation/all",

            },
            {
                "icon": "ReadOutlined",
                "label": "文章发布",
                "key": "/operation/article",
            },
            {
                "icon": "CommentOutlined",
                "label": "内容评论",
                "key": "/operation/comments",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "设备管理",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "能源消耗",
        "key": "/energy",
    },
    {
        "icon": "SettingOutlined",
        "label": "系统设置",
        "key": "/settings",
    },
    {
        "icon": "UserOutlined",
        "label": "个人中心",
        "key": "/personal",
    }
]

const customizeMenuList = [
    {
      "icon": "DashboardOutlined",
      "label": "工作台",
      "key": "/dashboard",
    },
    {
  
      "icon": "TeamOutlined",
      "label": "租户管理",
      "key": "/users",
      "children": [
        {
          "icon": "UnorderedListOutlined",
          "label": "租户列表",
          "key": "/users/list",
        },
      ]
    },
    {
      "icon": "LaptopOutlined",
      "label": "物业管理",
      "key": "/estate",
      "children": [
        {
          "icon": "InsertRowLeftOutlined",
          "label": "楼宇管理",
          "key": "/estate/tenement",
        },
       
      ]
    },
    {
      "icon": "ToolOutlined",
      "label": "报修管理",
      "key": "/repair"
    },
    {
      "icon": "ToolOutlined",
      "label": "设备管理",
      "key": "/equipment",
    },
    {
      "icon": "ThunderboltOutlined",
      "label": "能源消耗",
      "key": "/energy",
    },
    {
      "icon": "UserOutlined",
      "label": "个人中心",
      "key": "/personal",
    }
  ]

Mock.mock('https://www.demo.com/menu', 'get', (options:any)=>{
    const token = sessionStorage.getItem("token");
    if (token === "adminxxx"){
        return {
            code: 200,
            message: '请求成功',
            data: menuList
        }
    }else if(token === "managerxxx"){
        return {
            code: 200,
            message: '请求成功',
            data: managerMenuList
        }
    }else if(token === "userxxx"){
        return {
            code: 200,
            message: '请求成功',
            data: customizeMenuList
        }
    }else{
        return {
            code: 401,
            message: '请求失败',
            data: null
        }
    }
    

})

//dashboard里 图表接口
Mock.mock('https://www.demo.com/energyData',"get",()=>{
    return {
        code:200,
        message:"请求成功",
        data:[
            {name:"煤",data:[120, 132, 101, 134, 90, 230, 210]},
            {name:"气",data:[220, 182, 191, 234, 290, 330, 310]},
            {name:"油",data: [150, 232, 201, 154, 190, 330, 410]},
            {name:"电",data:[320, 332, 301, 334, 390, 330, 320]},
            {name:"热",data:[820, 932, 901, 934, 1290, 1330, 1320]}
        ]
    }
})
// 获取公司数据
Mock.mock('https://www.demo.com/getCompanyData',"get",()=>{
    return {
        code:200,
        message:"请求成功",
        data: {
            years: ["2014", "2016", "2018", "2020", "2022", "2024"],
            series: [
                {
                    name: "科技企业",
                    data: [40, 220, 378, 658, 1122, 1200]
                },
                {
                    name: "高新企业",
                    data: [20, 39, 443, 490, 559, 762]
                },
                {
                    name: "国营企业",
                    data: [78, 167, 229, 330, 380, 420]
                }
            ]
        }
    }
})

// 扩展获取随机手机号
Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  }
})

//租户列表的接口
Mock.mock("https://www.demo.com/userList","post",(options:any)=>{
    const {pageSize,}=JSON.parse(options.body)
    return {
        code:200,
        message:"成功",
        data:Mock.mock({
            [`list|${pageSize}`]:[
                {
                    "id":"@string('number',6)",//随机生成一个六位数字id
                    "name":"@cname",//随机生成一个人名
                    "status|1":["1","2","3"],
                    "tel":'@phone',
                    "business|1": ['制造业','互联网','新媒体','美业','新能源','物流','电商'],
                    "email":"@email",
                    "creditCode":"@string('number',18)",
                    "industryNum":"@string('number',15)",
                    "organizationCode":"@string('upper',9)",
                    "legalPerson":"@cname",
                },
            ],
            total:78
        })
    }
})


//删除企业
Mock.mock('https://www.demo.com/deleteUser','post',(options:any)=>{
  const {id}=JSON.parse(options.body);
  console.log("删除企业",id);
  return {
    code: 200,
    message: "成功",
    data:"操作成功"
  }
})

//批量删除企业
Mock.mock('https://www.demo.com/batchDeleteUser','post',(options:any)=>{
  const {ids}=JSON.parse(options.body);
  console.log("ids",ids)
  return {
    code: 200,
    message: "成功",
    data:"操作成功"
  }
})

//编辑企业
Mock.mock('https://www.demo.com/editUser','post',(options:any)=>{
  console.log("编辑企业收到参数",JSON.parse(options.body))
  return {
    code: 200,
    message: "成功",
    data:"操作成功"
  }
})