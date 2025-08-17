import { useSelector } from "react-redux";

function withPermissions<T extends React.ComponentType<any>>(Component : T) {
    return function(props:any) {
            const { buttonList } = useSelector((state: any) => state.authReducer);

            if(!props.permissionCode){
                return <>请传入权限码</>
            }
            // 检查用户是否有权限
            if (buttonList && Array.isArray(buttonList) && buttonList.includes(props.permissionCode)) {
                const { permissionCode, ...restProps } = props;
                return <Component {...restProps} />;
            } else {
                // 没有权限时返回 null 或者自定义的提示组件
                return null;
            }
        };

    };

export default withPermissions;