import { useNavigate  } from "react-router-dom";
const Login = function(){
    const navigate = useNavigate()
    return <>
        <h1>登录</h1>
        <button onClick={()=>navigate('/home')}>跳往主页</button>
    </>
}

export default Login;