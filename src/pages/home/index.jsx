import { Link } from "react-router-dom";
import { Button } from "antd";
function Home() {
    return <>
        <h1>主页</h1>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>



        <Link to="/login">去登录页</Link>
    </>
}

export default Home;   