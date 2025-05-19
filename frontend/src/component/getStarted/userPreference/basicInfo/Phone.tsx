import { useState } from "react";

interface IProp {
  index: number;
  setIndex: (i: number) => void;
}

const Phone = ({ index, setIndex }: IProp) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-4">
          What's your phone number?
        </h1>

        <div className="flex items-center gap-4 max-w-[600px]">
          {/* Phone Number Input */}
          <input
            type="number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="flex-grow border-[1px] border-[#505965] bg-black text-white placeholder-[#B9B9C2] py-3 px-4 rounded-lg focus:outline-none focus:border-[1px] focus:border-blue-600"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={() => setIndex(index + 1)}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Phone;
