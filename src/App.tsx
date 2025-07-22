import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { generateRoutes } from "./utils/generatesRoutes"
import { useEffect, useState, Suspense } from 'react';
import { baseRouters }  from './router'

function App() {
  const { menuList} = useSelector((state:any)=> state.authReducer);
  const [routers, setRouters] = useState<any>(null)
  useEffect(()=>{
    console.log(menuList, 'menuList')
    const dynamicRoutes = generateRoutes(menuList)
    
    const mergedRoutes  = [...baseRouters];
    mergedRoutes[0].children=dynamicRoutes;
    if (dynamicRoutes.length) {
      mergedRoutes[0].children[0].index=true
    }
    const routers = createBrowserRouter(mergedRoutes)    
    setRouters(routers)       

  }, [menuList])


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
