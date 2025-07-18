import { all } from "axios";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Iprops {
    allowed: boolean,
    redirectUrl: string,
    children: ReactNode
}
function RequireAuth({allowed,redirectUrl, children}:Iprops){

    const token = useSelector((state: any) => state.authReducer.token);
    const navigate = useNavigate()
    const isLogin = !!token;

    useEffect(() => {
        // allow表示路由是否需要登录，isLogin表示当前是否登录
        if(isLogin!==allowed){
            navigate(redirectUrl)
            return
        }
    }, [isLogin, allowed, redirectUrl,])
    

    return isLogin==allowed?<>{children}</>:<></>;

}

export default RequireAuth