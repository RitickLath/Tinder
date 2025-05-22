import {
  type IProp,
  drinkingOptions,
  smokingOptions,
  workoutOptions,
} from "../../../../constants/hardcoded/constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateField } from "../../../../features/welcome/welcomeSlice";
import { useState } from "react";

const LifeStyle = ({ index, setIndex }: IProp) => {
  // RTK
  const drink = useSelector((state: RootState) => state.welcome.drink);
  const smoking = useSelector((state: RootState) => state.welcome.smoke);
  const workout = useSelector((state: RootState) => state.welcome.workout);

  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleNext = () => {
    if (!drink || !smoking || !workout) {
      setError("Please select all lifestyle habits before proceeding.");
      return;
    }
    setError("");
    setIndex(index + 1);
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-2">
          Let’s talk lifestyle habits!
        </h1>
        <h2 className="text-[#B9B9C2] mb-8">
          Do their habits match yours? You go first.
        </h2>

        {/* Drinking Habits */}
        <div className="border-t border-[#505965] py-6 max-w-[600px]">
          <h2 className="text-white font-semibold text-lg">
            How often do you drink?
          </h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {drinkingOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() =>
                  dispatch(updateField({ field: "drink", value: option }))
                }
                className={`${
                  drink === option ? "border-[#FE5164]" : "border-[#505965]"
                } py-2 px-4 cursor-pointer rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] transition`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Smoking Habits */}
        <div className="border-t border-[#505965] py-6 max-w-[600px]">
          <h2 className="text-white font-semibold text-lg">
            How often do you smoke?
          </h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {smokingOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() =>
                  dispatch(updateField({ field: "smoke", value: option }))
                }
                className={`${
                  smoking === option ? "border-[#FE5164]" : "border-[#505965]"
                } py-2 px-4 cursor-pointer rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] transition`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Workout Habits */}
        <div className="border-t border-[#505965] py-6 max-w-[600px]">
          <h2 className="text-white font-semibold text-lg">Do you workout?</h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {workoutOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() =>
                  dispatch(updateField({ field: "workout", value: option }))
                }
                className={`${
                  workout === option ? "border-[#FE5164]" : "border-[#505965]"
                } py-2 px-4 cursor-pointer rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] transition`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 font-semibold mt-4 max-w-[600px]">
            {error}
          </p>
        )}
      </div>

      {/* Next Button */}
      <div className="w-full flex items-center justify-center min-h-[10dvh] mt-8">
        <button
          onClick={handleNext}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LifeStyle;
