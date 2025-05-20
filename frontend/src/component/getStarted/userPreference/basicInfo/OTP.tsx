import { useEffect, useRef, useState } from "react";

interface IProp {
  index: number;
  setIndex: (i: number) => void;
}

const OTP = ({ index, setIndex }: IProp) => {
  const inputLength = 6;
  const [inputArray, setInputArray] = useState<string[]>(
    new Array(inputLength).fill("")
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const updatedInput = value.slice(-1); // Only 1 digit
    const newArray = [...inputArray];
    newArray[index] = updatedInput;
    setInputArray(newArray);

    if (updatedInput && index < inputLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !inputArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const isComplete = inputArray.every((val) => val !== "");
    if (!isComplete) {
      setError("Please enter all 6 digits of the OTP.");
    } else {
      setError("");
      setIndex(index + 1);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-10">Enter the OTP</h1>
        <div className="ml-1 w-full flex space-x-2">
          {inputArray.map((value, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className="w-[40px] sm:w-[60px] text-center py-3 px-4 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-700 mb-3"
              value={value}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
            />
          ))}
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="text-[#B9B9C2]">
          Your profile shows your age, not your birthdate.
        </p>
      </div>

      {/* Button */}
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={handleSubmit}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Submit OTP
        </button>
      </div>
    </div>
  );
};

export default OTP;
