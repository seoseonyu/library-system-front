import {
  BarcodeOutlined,
  BookOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import {Layout, Menu, MenuProps, Space} from "antd";
import {Key, ReactNode, useState} from "react";
import {Outlet, useMatch, useNavigate} from "react-router-dom";
import Header from "../components/common/header/Header";

const {Footer, Sider, Content} = Layout;

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
  getItem("대시보드", "dashboard", <DashboardOutlined/>),
  getItem("도서조회", "book/list", <BarcodeOutlined/>),
  getItem("대출관리", "manage", <BookOutlined/>),
];

const UserRoute = () => {
  const match = useMatch("/user/:child");
  const title = match
    ? match.params.child
      ? match.params.child
      : "unknown"
    : "unknown";

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const onClickMenuHandler: MenuProps["onClick"] = (info) => {
    navigate(`/user/${info.key}`);
  };

  return (
    <Space direction="vertical" style={{width: "100%"}} size={[0, 48]}>
      <Layout hasSider>
        <Sider
          style={{overflow: "auto", height: "100vh", width: 256}}
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
            onClick={onClickMenuHandler}
          />
          <p>{collapsed}</p>
        </Sider>
        <Layout>
          <Header title={title}/>
          <Content style={{display: "flex"}}>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};

export default UserRoute;
