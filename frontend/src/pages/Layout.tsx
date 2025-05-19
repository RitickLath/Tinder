import { Outlet } from "react-router-dom";
import BottomBar from "../component/BottomBar";
import Navbar from "../component/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#111418] h-[100dvh]">
      <Navbar />
      <Outlet />
      <BottomBar />
    </div>
  );
};

export default Layout;
