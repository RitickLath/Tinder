import { FaFire } from "react-icons/fa";
import { MdManageSearch } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();
  let index = 1;
  const location = useLocation();
  switch (location.pathname) {
    case "/app/recs":
      index = 1;
      break;
    case "/app/explore":
      index = 2;
      break;
    case "/app/matches":
      index = 3;
      break;
    case "/app/profile":
      index = 4;
      break;

    default:
      break;
  }
  const handleClick = (page: number) => {
    switch (page) {
      case 1:
        navigate("/app/recs");
        break;
      case 2:
        navigate("/app/explore");
        break;
      case 3:
        navigate("/app/matches");
        break;
      case 4:
        navigate("/app/profile");
        break;

      default:
        break;
    }
  };

  return (
    <div className="bg-[#111418] flex w-full h-[10dvh] justify-between px-12 text-gray-500 text-3xl">
      <FaFire
        onClick={() => handleClick(1)}
        className={`${
          index == 1 ? "text-[#FF4458]" : "text-gray-500"
        } cursor-pointer`}
      />
      <MdManageSearch
        onClick={() => handleClick(2)}
        className={`${
          index == 2 ? "text-[#FF4458]" : "text-gray-500"
        } cursor-pointer`}
      />
      <IoIosChatbubbles
        onClick={() => handleClick(3)}
        className={`${
          index == 3 ? "text-[#FF4458]" : "text-gray-500"
        } cursor-pointer`}
      />
      <RiAdminFill
        onClick={() => handleClick(4)}
        className={`${
          index == 4 ? "text-[#FF4458]" : "text-gray-500"
        } cursor-pointer`}
      />
    </div>
  );
};

export default BottomBar;
