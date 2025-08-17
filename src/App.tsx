import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { generateRoutes } from "./utils/generatesRoutes"
import { useEffect, useState, Suspense } from 'react';
import { baseRouters }  from './router'
import { setMuneList, setButtonList, } from './store/authSlice';
import { useDispatch } from 'react-redux';
import { getMenuList, getButtonList } from './api/users';
import { Spin  } from 'antd';
function App() {
  const { token} = useSelector((state:any)=> state.authReducer);
  const dispatch = useDispatch()
  const [routers, setRouters] = useState<any>(null)
  useEffect(()=>{
    async function loadData(){
      let data:any = []
      if(token){
        let {data: menuData} = await getMenuList()
        data = menuData;
        let { data: buttonData } = await getButtonList()
        dispatch(setButtonList(buttonData))
        dispatch(setMuneList(data))
      }
      const dynamicRoutes = generateRoutes(data)
      const mergedRoutes  = [...baseRouters];
      mergedRoutes[0].children=dynamicRoutes;
      if (dynamicRoutes.length) {
        mergedRoutes[0].children[0].index=true
      }
      const routers = createBrowserRouter(mergedRoutes)    
      setRouters(routers)

    }

      loadData()
  }, [token, dispatch])


  if(!routers){
    return (
      <div className="App">
        <Spin />
      </div>
    );
  }

  return (
      <div className="App">
        <Suspense fallback={<Spin />}>
          <RouterProvider router={routers} />
        </Suspense>
      </div>
    );
}

export default App;
