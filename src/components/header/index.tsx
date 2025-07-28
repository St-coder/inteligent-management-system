import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { useMemo } from 'react';
import {
  UserOutlined,
  LogoutOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { clearToken, clearUserInfo, clearMuneList } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';


const items: MenuProps['items'] = [
  {
    key: '/personal',
    label: (
      <a target="_blank">个人中心</a>
    ),
    icon: <UserOutlined />,
  },
  {
    key: '/logout',
    label: (
      <a target="_blank">退出登录</a>
    ),
    icon: <LogoutOutlined />,
  },
];




function MyHeader(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useSelector((state: any) => state.authReducer.userInfo)
    const welcomeText = useMemo(()=>{
        return `欢迎您，${userInfo.userName}`
    }, [userInfo?.userName])

    
    const onClick: MenuProps['onClick'] = ({key}) => {
        if(key === '/logout'){
            dispatch(clearToken())
            dispatch(clearUserInfo())
            dispatch(clearMuneList())
        }else{
            navigate(key)
        }
    };
    return <div>
        <Dropdown menu={{ items, onClick }} trigger={['click']} arrow>
            <a onClick={e => e.preventDefault()}>
            <Space>
                { welcomeText }
                <DownOutlined />
            </Space>
            </a>
        </Dropdown>
    </div>
}
export default MyHeader;
