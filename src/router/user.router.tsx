import { Route, Routes } from "react-router-dom";
import User from "../pages/user";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default UserRouter;
