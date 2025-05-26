import { Outlet, useNavigate } from "react-router-dom";
import BottomBar from "../component/BottomBar";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/authenticated",
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          setIsAuthenticated(true);
        } else {
          navigate("/");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#111418] h-[100dvh] text-white p-4">Loading...</div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="bg-[#111418] h-[100dvh]">
      <Navbar />
      <Outlet />
      <BottomBar />
    </div>
  );
};

export default Layout;
