import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../../redux/store";

const BlockedContact = () => {
  const [blockedNumbers, setBlockedNumbers] = useState<string[]>([]);
  const [inputNumber, setInputNumber] = useState<string>("");
  const navigate = useNavigate();

  // RTK
  const allData = useSelector((state: RootState) => state.welcome);
  console.log(allData);

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        { ...allData, blocked_contacts: blockedNumbers },
        { withCredentials: true }
      );
      if (response.data.success) {
        navigate("/app/recs");
      }
      console.log("");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleAddNumber = () => {
    if (inputNumber.trim() !== "" && !blockedNumbers.includes(inputNumber)) {
      setBlockedNumbers([...blockedNumbers, inputNumber.trim()]);
      setInputNumber("");
    }
  };

  const handleRemoveNumber = (number: string) => {
    setBlockedNumbers(blockedNumbers.filter((n) => n !== number));
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-4">Blocked Contacts</h1>
        <h2 className="text-[#B9B9C2] mb-6">
          Add phone numbers you want to block from viewing your profile.
        </h2>

        <div className="flex gap-2 mb-6 max-w-[500px]">
          <input
            type="tel"
            placeholder="Enter phone number"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            className="flex-1 border-[1px] border-[#505965] bg-black text-white placeholder-[#B9B9C2] py-3 px-4 rounded-lg focus:outline-none focus:border-[1px] focus:border-blue-600"
          />
          <button
            onClick={handleAddNumber}
            className="bg-[#FE5164] cursor-pointer text-white font-semibold px-6 rounded-lg hover:bg-[#e54457]"
          >
            Add
          </button>
        </div>

        {blockedNumbers.length > 0 ? (
          <div className="space-y-3 max-w-[500px]">
            {blockedNumbers.map((number, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-2 border-[#505965] rounded-lg py-2 px-4 text-white"
              >
                <span>{number}</span>
                <button
                  onClick={() => handleRemoveNumber(number)}
                  className="text-[#FE5164] cursor-pointer hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#B9B9C2]">No blocked contacts yet.</p>
        )}
      </div>
      {/* Next Button */}
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={handleSignup}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default BlockedContact;
