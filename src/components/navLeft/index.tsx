import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import icons from './iconList';
import type { MenuProps } from 'antd';
import "./index.scss"
import logo from "../../assets/logo.png"
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
type MenuItem = Required<MenuProps>['items'][number];

interface Iprops{
    collapsed: boolean;
}
interface itemFace {
    label: string,
    key: string,
    path: string,
    icon: string,
    children?: itemFace[],
}
function NavLeft({collapsed,}: Iprops){
    const [menu, setMenus]=useState<MenuItem[]>([])
    const {menuList} = useSelector((state:any)=> state.authReducer);
    const location=useLocation();
    const navigate = useNavigate()
    async  function configMenu(){
        const mappedMenuItems = handleMenu(menuList)
        setMenus(mappedMenuItems)
    }

    function handleMenu(data: itemFace[]): MenuItem[]{
        return data.map((item:itemFace) => {
            return {
                label: item.label,
                key: item.key,
                path: item.key,
                icon: icons[item.icon],
                children: item.children?.length ? handleMenu(item.children) : null
            }
        })
    }

    function selectMenu({key}:{key:string}){
        navigate(key)
    }

    useEffect(()=>{
        configMenu()
         // eslint-disable-next-line
    }, [menuList])

    return <div className='navleft'>
        <div className='logo'>
            <img src={logo} alt="" width={18}/>
            <h1>朋远智慧园区</h1>
        </div>
        <Menu
            selectedKeys={[location.pathname]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={menu}
            onSelect={selectMenu}
      />
    </div>
}

export default NavLeft;