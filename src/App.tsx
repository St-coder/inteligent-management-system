import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { generateRoutes } from "./utils/generatesRoutes"
import { useEffect, useState, Suspense } from 'react';
import { baseRouters }  from './router'
import { setMuneList } from './store/authSlice';
import { useDispatch } from 'react-redux';
import { getMenuList } from './api/users';

function App() {
  const { token} = useSelector((state:any)=> state.authReducer);
  const dispatch = useDispatch()
  const [routers, setRouters] = useState<any>(null)
  useEffect(()=>{
    async function loadData(){
      let data:any = []
      if(token){
        let res = await getMenuList()
        data = res.data;
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
      <div className="App">您稍等...</div>
    );
  }

  return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={routers} />
        </Suspense>
      </div>
    );
}

export default App;
