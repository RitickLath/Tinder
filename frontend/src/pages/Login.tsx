import axios from "axios";
import { useState } from "react";

const Login = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // Send OTP Handler
  const handleSendOTP = async () => {
    setError("");
    if (phone.trim().length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/otp/send",
        { phone, mode: "signin" },
        { withCredentials: true }
      );

      if (response.data.success) {
        setStep("otp");
      } else {
        setError(response.data.message || "Failed to send OTP.");
      }
    } catch (error: any) {
      console.log(error);
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  // Verify OTP Handler
  const handleVerifyOTP = async () => {
    setError("");
    if (otp.length !== 6) {
      setError("OTP must be 6 digits.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/otp/verify",
        { phone, otp, mode: "signin" },
        { withCredentials: true }
      );

      if (response.data.success) {
        // Authenticated — maybe redirect or call `onClose`
        onClose(); // Or replace with navigate("/home"), etc.
      } else {
        setError(response.data.message || "OTP verification failed.");
      }
    } catch (error: any) {
      console.error("OTP verification error:", error);
      setError(error.response?.data?.message || "Verification error occurred.");
    }
  };

  return (
    <div className="bg-[#111418] text-white w-full h-[100dvh] sm:max-w-[500px] sm:max-h-[500px] sm:rounded-2xl sm:shadow-xl sm:overflow-hidden sm:relative z-50 flex flex-col justify-center items-center px-4">
      {/* Tinder Logo */}
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-bold">tinder</h1>
      </div>

      {/* Close Icon */}
      <button
        onClick={onClose}
        className="cursor-pointer absolute top-4 right-4 text-3xl font-light"
      >
        &times;
      </button>

      {step === "phone" ? (
        <>
          <h1 className="text-3xl font-bold mb-12">Enter your phone number</h1>
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full max-w-md border border-gray-500 rounded-full py-2 px-4 mb-4 bg-transparent focus:outline-none text-center"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            onClick={handleSendOTP}
            className="cursor-pointer w-full max-w-md bg-gradient-to-r from-[#FC5F70] to-[#E419BB] py-3 font-semibold rounded-full"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Enter OTP</h1>
          <input
            type="number"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.slice(0, 6))}
            className="w-full max-w-md border border-gray-500 rounded-full py-2 px-4 mb-4 bg-transparent focus:outline-none text-center text-xl"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            onClick={handleVerifyOTP}
            className="cursor-pointer w-full max-w-md bg-gradient-to-r from-[#FC5F70] to-[#E419BB] py-3 font-semibold rounded-full"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
