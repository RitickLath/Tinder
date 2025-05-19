import { useEffect, useRef, useState } from "react";

const OTP = () => {
  const inputLength = 6;
  const [inputArray, setInputArray] = useState<string[]>(
    new Array(inputLength).fill("")
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const updatedInput = value.slice(-1); // Ensure only 1 digit
    const newArray = [...inputArray];
    newArray[index] = updatedInput;
    setInputArray(newArray);

    // Move focus to next input if value is entered
    if (updatedInput && index < inputLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!inputArray[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
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
      <p className="text-[#B9B9C2]">
        Your profile shows your age, not your birthdate.
      </p>
    </div>
  );
};

export default OTP;
