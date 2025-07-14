import Mock from 'mockjs'

Mock.mock('https://www.demo.com/login', "post", ()=>{
    return {
        code: 200,
        message: '登录成功',
        data: {
            token: 'mock123456',
            userName: '赵铁柱'
        }
    }
})