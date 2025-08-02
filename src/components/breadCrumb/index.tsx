import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';

import { useLocation } from  'react-router-dom'
interface MenuItem{
    key:string;
    label:string;
    children?:MenuItem[]
}



//[{label:"物业管理"},{label:"楼宇管理"}] ["物业管理","楼宇管理"]
function findBreadCrumbPath(path:string,menuItems:MenuItem[]):string[] {
    const pathSegments:string[]=[];
    function findPath(currentPath:string,items:MenuItem[]){
        for(let item of items){
            if(currentPath.startsWith(item.key)){
                pathSegments.push(item.label)
                if(item.children){
                    findPath(currentPath,item.children)
                }
                break;
            }
        }
      
        return pathSegments
    }
    return  findPath(path,menuItems)
}
function MyBreadCrumb(){
    // const  [items, setItems] = useState<ItemsProps[]>([]);
    const location=useLocation();
    const {menuList}=useSelector((state:any)=>state.authReducer)
    const breadList=findBreadCrumbPath(location.pathname,menuList).map(item=>({title:item}))

    return (
        <div>
            <Breadcrumb items={breadList}/>
        </div>
    )
}
export default MyBreadCrumb
