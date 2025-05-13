import { useState, type FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProgressBar from "../Generic/ProgressBar";
import ConditionalPage from "./ConditionalPage";

const Welcome: FC = () => {
  const [index, setIndex] = useState(1);

  const handleBack = () => {
    if (index > 1) setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (index < 16) setIndex((prev) => prev + 1);
  };

  return (
    <div className="bg-[#111418] text-white w-full h-screen flex flex-col px-8 py-4">
      {/* Header */}
      <div className="flex items-center justify-between min-h-[10vh]">
        {/* Back Button */}
        {index != 1 && (
          <button
            onClick={handleBack}
            className="hover:bg-[#222529] p-2 rounded-xl"
          >
            <FaArrowLeft className="text-xl" />
          </button>
        )}
        {/* Progress Bar */}
        <ProgressBar index={index} />
      </div>

      {/* Content */}
      <ConditionalPage index={index} />

      {/* Footer / Next Button */}
      <div className="w-full flex items-center justify-center min-h-[10vh]">
        <button
          onClick={handleNext}
          className="w-full max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          {index < 15 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
