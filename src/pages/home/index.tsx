import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Layout, theme } from 'antd';
import NavLeft from "../../components/navLeft";
import MyBreadCrumb from "../../components/breadCrumb";
import MyHeader from "../../components/header";



const { Header, Content, Footer, Sider } = Layout;
function Home() {
  const {
        token: { colorBgContainer, },
      } = theme.useToken();

  let [collapsed, setCollapsed] = useState(false);
    return <>
        <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <NavLeft collapsed={collapsed}  />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingRight: '20px', background: colorBgContainer,textAlign:"right" }}>
          <MyHeader />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <MyBreadCrumb />
          <Outlet />
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </>
}

export default Home;