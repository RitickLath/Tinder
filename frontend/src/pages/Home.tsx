import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

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
          navigate("/app/recs");
        } else {
          navigate("/");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        navigate("/");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-full h-[100dvh] text-white overflow-hidden">
      {/* Background Image */}
      <picture>
        <source
          srcSet="https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp"
          media="(min-width: 900px)"
        />
        <img
          className="absolute w-full h-full object-cover"
          src="https://tinder.com/static/build/853c9decf9752fa3ae9654095216b391.webp"
          alt="Background"
        />
      </picture>

      {/* Black Overlay Film */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Top Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20">
        <h1 className="text-2xl font-bold">tinder</h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-8">
          Start something epic.
        </h1>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 w-full max-w-sm">
          <button
            onClick={() => navigate("/onboarding")}
            className="cursor-pointer w-full bg-gradient-to-r from-[#FC5F70] to-[#E419BB] py-3 font-semibold rounded-full"
          >
            Create account
          </button>
          <button
            onClick={() => setShowLoginModal(true)}
            className="cursor-pointer w-full border border-white py-3 font-semibold rounded-full"
          >
            Log in
          </button>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <p className="absolute bottom-4 text-xs text-gray-400 w-full text-center">
        All photos are of models and used for illustrative purposes only
      </p>

      {/* Login Modal Overlay */}
      {showLoginModal && (
        <>
          {/* Blur Background */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-30"></div>

          {/* Login Modal */}
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <Login onClose={() => setShowLoginModal(false)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
