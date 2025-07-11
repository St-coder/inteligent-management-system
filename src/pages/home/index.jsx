import { Link } from "react-router-dom";
function Home(){
    return <>
        <h1>主页</h1>
        <Link to="/login">去登录页</Link>
    </>
}

export default Home;   