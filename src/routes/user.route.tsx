import {Button, Layout, Menu, MenuProps, Space} from "antd";
import {Outlet} from "react-router-dom";
import {Key, ReactNode, useState} from "react";
import {
  BarcodeOutlined,
  BookOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";

const {Header, Footer, Sider, Content} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key, icon, children, label, type
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('대시보드', '1', <DashboardOutlined/>),
  getItem('도서대출', '2', <BarcodeOutlined/>),
  getItem('대출관리', '3', <BookOutlined/>),
]

const UserRoute = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Space direction='vertical' style={{width: '100%'}} size={[0, 48]}>
      <Layout hasSider>
        <Sider
          style={{overflow: 'auto', height: '100vh', width:256}}
          collapsible
          collapsed={collapsed}
          onClick={toggleCollapsed}
        >
          <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
          <Menu
            theme='dark'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={[]}
            mode='inline'
            items={items}
          />
          <p>{collapsed}</p>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{padding:10}}>
            <Outlet/>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
}

export default UserRoute;
