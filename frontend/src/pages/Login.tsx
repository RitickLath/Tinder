import { useState } from "react";

const Login = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

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
            className="w-full max-w-md border border-gray-500 rounded-full py-2 px-4 mb-6 bg-transparent focus:outline-none text-center"
          />
          <button
            onClick={() => setStep("otp")}
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
            placeholder="Enter 4-digit OTP"
            maxLength={4}
            value={otp}
            onChange={(e) => {
              const value = e.target.value.slice(0, 4); // Limit to 4 digits
              setOtp(value);
            }}
            className="w-full max-w-md border border-gray-500 rounded-full py-2 px-4 mb-6 bg-transparent focus:outline-none text-center text-xl"
          />
          <button className="cursor-pointer w-full max-w-md bg-gradient-to-r from-[#FC5F70] to-[#E419BB] py-3 font-semibold rounded-full">
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
