import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error.page";
import RootRoute from "./routes/root.route";
import UserDashboard from "./pages/user/dashboard.page";
import { ConfigProvider } from "antd";
import UserRoute from "./routes/user.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "user",
    element: <UserRoute />,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "book",
        element: <>book</>,
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
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
