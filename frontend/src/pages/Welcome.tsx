import { useState, type FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import ConditionalPage from "../components/Get Started/ConditionalPage";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
  const [index, setIndex] = useState(1);
  const navigate = useNavigate();

  const buttonText = (index: number) => {
    if (index == 2) {
      return "Send OTP";
    } else if (index == 15) {
      return "Finish";
    }
    return "Next";
  };

  const handleBack = () => {
    if (index > 1) setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (index == 15) navigate("/app/recs");
    else setIndex((prev) => prev + 1);
  };

  return (
    <div className="bg-[#111418] text-white w-full h-[100dvh]  flex flex-col px-8 py-4">
      {/* Header */}
      <div className="flex items-center justify-between min-h-[10dvh]">
        {index != 1 && (
          <button
            onClick={handleBack}
            className="hover:bg-[#222529] p-2 rounded-xl"
          >
            <FaArrowLeft className="text-xl" />
          </button>
        )}
        <ProgressBar index={index} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto no-scrollbar">
        <ConditionalPage index={index} />
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={handleNext}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          {buttonText(index)}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
