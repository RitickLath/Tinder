import { useState } from "react";

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
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
  );
};

export default Phone;
