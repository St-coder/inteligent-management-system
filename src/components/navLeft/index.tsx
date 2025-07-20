import { Menu, theme } from 'antd';
import { getMenuList } from '../../api/users';
import { useEffect, useState } from 'react';
import icons from './iconList';
import type { MenuProps } from 'antd';
import "./index.scss"
import logo from "../../assets/logo.png"

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

    async  function configMenu(){
        const {data} = await getMenuList()
        const mappedMenuItems = handleMenu(data)
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

    function selectMenu(data:any){
        console.log(data, 'key')
    }

    useEffect(()=>{
        configMenu()
    }, [])

    return <div className='navleft'>
        <div className='logo'>
            <img src={logo} alt="" width={18}/>
            <h1>朋远智慧园区</h1>
        </div>
        <Menu
            defaultSelectedKeys={['/dashboard']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={menu}
            onSelect={selectMenu}
      />
    </div>
}

export default NavLeft;