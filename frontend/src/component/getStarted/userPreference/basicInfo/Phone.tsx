import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateField } from "../../../../features/welcome/welcomeSlice";
import { useState } from "react";
import axios from "axios";

interface IProp {
  index: number;
  setIndex: (i: number) => void;
}

const Phone = ({ index, setIndex }: IProp) => {
  // RTK
  const phoneNumber = useSelector((state: RootState) => state.welcome.phone);
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const askOTP = async (): Promise<boolean> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/otp/send",
        { phone: phoneNumber, mode: "signup" },
        { withCredentials: true }
      );
      if (response.data.success) {
        console.log(response.data?.data);
        return true;
      }
      setError(response.data?.message);
      return false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Error Occurred" + error);
      setError("Error sending OTP.");
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = /^(\+91)?[6-9]\d{9}$/.test(phoneNumber.trim());

    if (isValid) {
      try {
        const sent = await askOTP();
        if (sent) {
          setIndex(index + 1);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError("Failed to send OTP. Try again." + err);
      }
    } else {
      setError("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-4">
          What's your phone number?
        </h1>

        <div className="flex items-center gap-4 max-w-[600px]">
          {/* Phone Number Input */}
          <input
            type="tel"
            required
            value={phoneNumber}
            onChange={(e) =>
              dispatch(updateField({ field: "phone", value: e.target.value }))
            }
            placeholder="Enter your phone number"
            className="flex-grow border-[1px] border-[#505965] bg-black text-white placeholder-[#B9B9C2] py-3 px-4 rounded-lg focus:outline-none focus:border-[1px] focus:border-blue-600"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={handleNext}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default Phone;
