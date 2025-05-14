import { Outlet } from "react-router-dom";
import BottomBar from "../Components/BottomBar";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#111418] h-screen">
      <Navbar />
      <Outlet />
      <BottomBar />
    </div>
  );
};

export default Layout;
