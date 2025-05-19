import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";

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
