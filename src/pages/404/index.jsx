import { Button, Empty, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
function NotFound() {

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/dashboard")
    }
    return <Empty
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}

        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        styles={{ image: { height: 60 } }}
        description={
            <Typography.Text>
                温馨提示 <a href="#API">页面飞到火星去了</a>
            </Typography.Text>
        }
    >
        <Button type="primary" onClick={goHome}>回到首页</Button>

    </Empty>
}

export default NotFound;