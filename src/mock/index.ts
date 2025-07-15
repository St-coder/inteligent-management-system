import Mock from 'mockjs'

Mock.mock('https://www.demo.com/login', "post", (options: any)=>{
    const { userName, password } = JSON.parse(options.body)
    const arr = [
        {userName:'admin', token: 'adminxxx'},
        {userName:'manager', token: 'managerxxx'},
        {userName:'user', token: 'userxxx'},
    ]

    let obj = arr.find(it => it.userName==userName)    
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