import {
  BarcodeOutlined,
  BookOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, Space } from "antd";
import { Key, ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("대시보드", "dashboard", <DashboardOutlined />),
  getItem("도서대출", "book", <BarcodeOutlined />),
  getItem("대출관리", "manage", <BookOutlined />),
];

const UserRoute = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickMenuhandler: MenuProps["onClick"] = (info) => {
    window.history.pushState({}, "", `${info.key}`);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout hasSider>
        <Sider
          style={{ overflow: "auto", height: "100vh", width: 256 }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            defaultOpenKeys={[]}
            mode="inline"
            items={items}
            onClick={onClickMenuhandler}
          />
          <p>{collapsed}</p>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ padding: 10 }}>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default UserRoute;
