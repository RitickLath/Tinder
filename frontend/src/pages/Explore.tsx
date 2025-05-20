import Card from "../component/Card";
import {
  FaHeart,
  FaUserFriends,
  FaPlane,
  FaCoffee,
  FaUtensils,
  FaMusic,
  FaGamepad,
  FaLeaf,
  FaDumbbell,
  FaPaintBrush,
  FaSpa,
  FaFilm,
  FaFire,
} from "react-icons/fa";

const categories = [
  { title: "Long-term Partner", icon: <FaHeart />, color: "bg-red-600" },
  { title: "Free Tonight", icon: <FaFire />, color: "bg-orange-500" },
  { title: "Short Term Fun", icon: <FaDumbbell />, color: "bg-pink-500" },
  { title: "New Friends", icon: <FaUserFriends />, color: "bg-blue-500" },
  { title: "Non-Monogamous", icon: <FaHeart />, color: "bg-purple-600" },
];

const interestBased = [
  { title: "Travel", icon: <FaPlane />, color: "bg-indigo-600" },
  { title: "Add an Anthem", icon: <FaMusic />, color: "bg-yellow-600" },
  { title: "Binge Watchers", icon: <FaFilm />, color: "bg-gray-700" },
  { title: "Sporty", icon: <FaDumbbell />, color: "bg-green-600" },
  { title: "Coffee Date", icon: <FaCoffee />, color: "bg-brown-600" },
  { title: "Date Night", icon: <FaHeart />, color: "bg-red-800" },
  { title: "Thrill Seekers", icon: <FaFire />, color: "bg-orange-700" },
  { title: "Creatives", icon: <FaPaintBrush />, color: "bg-pink-700" },
  { title: "Foodies", icon: <FaUtensils />, color: "bg-yellow-800" },
  { title: "Nature Lovers", icon: <FaLeaf />, color: "bg-green-700" },
  { title: "Music Lovers", icon: <FaMusic />, color: "bg-purple-800" },
  { title: "Self Care", icon: <FaSpa />, color: "bg-blue-700" },
  { title: "Gamers", icon: <FaGamepad />, color: "bg-gray-800" },
];

const Explore = () => {
  return (
    <div className="bg-[#111418] py-6 px-6 flex flex-col justify-center">
      <h1 className="text-white font-bold text-2xl mb-1">
        Goal-Driven Dating.
      </h1>
      <p className="text-[#B9B9C2] mb-6">
        Find people with similar relationship goals.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <Card
            key={index}
            title={cat.title}
            icon={cat.icon}
            color={cat.color}
          />
        ))}
      </div>

      {/*  */}
      <h1 className="text-white font-bold text-2xl mt-12">
        Shared Interests and Hobbies.
      </h1>
      <p className="text-[#B9B9C2] mb-6">Find people with similar interests.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {interestBased.map((cat, index) => (
          <Card
            key={index}
            title={cat.title}
            icon={cat.icon}
            color={cat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
