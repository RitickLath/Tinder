import { useEffect, useRef, useState } from "react";
import type { IProp } from "../../../../constants/hardcoded/constants";

const DOB = ({ index, setIndex }: IProp) => {
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const dateRef = useRef<HTMLInputElement | null>(null);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    dateRef.current?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (index == 0) {
      setDate(value.slice(-2));
      if (value.length == 2) {
        monthRef.current?.focus();
      }
    } else if (index == 1) {
      setMonth(value.slice(-2));
      console.log(month);
      if (value.length == 2) {
        yearRef.current?.focus();
      }
    } else if (index == 2) {
      setYear(value.slice(0, 4));
    }
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-10">Your b-day?</h1>
        <div className="ml-1 w-full flex space-x-2">
          <input
            ref={dateRef}
            onChange={(e) => handleChange(e.target.value, 0)}
            value={date}
            className="text-center w-[100px] lg:w-[200px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
            type="number"
            required
            placeholder="DD"
            aria-label="Date"
          />
          <input
            ref={monthRef}
            onChange={(e) => handleChange(e.target.value, 1)}
            value={month}
            className="text-center w-[100px] lg:w-[200px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
            type="number"
            required
            placeholder="MM"
            aria-label="Month"
          />
          <input
            ref={yearRef}
            value={year}
            onChange={(e) => handleChange(e.target.value, 2)}
            className="text-center w-[100px] lg:w-[200px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
            type="number"
            required
            placeholder="YYYY"
            aria-label="Year"
          />
        </div>
        <p className="text-[#B9B9C2]">
          Your profile shows your age, not your birthdate.
        </p>
      </div>
      {/* Next Button */}
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

export default DOB;
