import { Route, Routes } from "react-router-dom";
import User from "../pages/user";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
    </Routes>
  );
};

export default RootRouter;
