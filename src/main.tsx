import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error.page";
import RootRoute from "./routes/root.route";
import UserDashboardPage from "./pages/user/dashboard.page";
import {ConfigProvider} from "antd";
import UserRoute from "./routes/user.route";
import UserBookPage from "./pages/user/book.page";

// Style Import
import 'devextreme/dist/css/dx.light.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "user",
    element: <UserRoute/>,
    children: [
      {
        path: "dashboard",
        element: <UserDashboardPage/>,
      },
      {
        path: "book",
        element: <UserBookPage/>
      },
      {
        path: "manage",
        element: <>manage</>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider direction="ltr">
      <RouterProvider router={router}/>
    </ConfigProvider>
  </React.StrictMode>
);
