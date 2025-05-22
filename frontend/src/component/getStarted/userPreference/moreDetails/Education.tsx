import {
  type IProp,
  highestEducations,
  workOptions,
} from "../../../../constants/hardcoded/constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateField } from "../../../../features/welcome/welcomeSlice";
import { useState } from "react";

const Education = ({ index, setIndex }: IProp) => {
  const school = useSelector((state: RootState) => state.welcome.school);
  const education = useSelector(
    (state: RootState) => state.welcome.highestEducation
  );
  const work = useSelector((state: RootState) => state.welcome.work);
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleNext = () => {
    if (!school || !school.trim() || !education || !work) {
      setError("Please fill in all fields before proceeding.");
      return;
    }
    setError("");
    setIndex(index + 1);
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75vh]">
        {/* School */}
        <h1 className="text-white font-bold text-2xl mb-4">
          Which school did you attend?
        </h1>
        <input
          type="text"
          value={school}
          onChange={(e) =>
            dispatch(updateField({ field: "school", value: e.target.value }))
          }
          placeholder="Enter your school name"
          className="w-full max-w-[600px] border border-[#505965] bg-black text-white placeholder-[#B9B9C2] py-3 px-4 rounded-lg focus:outline-none focus:border-blue-600 mb-10"
        />

        {/* Education Level */}
        <h1 className="text-white font-bold text-2xl mb-4">
          What's your highest education level?
        </h1>
        <div className="flex flex-wrap gap-3 mb-10 max-w-[600px]">
          {highestEducations.map((level, idx) => (
            <button
              key={idx}
              onClick={() =>
                dispatch(
                  updateField({ field: "highestEducation", value: level })
                )
              }
              className={`${
                education === level ? "border-[#FE5164]" : "border-[#505965]"
              } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] transition`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Work */}
        <h1 className="text-white font-bold text-2xl mb-4">
          What do you do for work?
        </h1>
        <div className="flex flex-wrap gap-3 max-w-[600px]">
          {workOptions.map((workk, idx) => (
            <button
              key={idx}
              onClick={() =>
                dispatch(updateField({ field: "work", value: workk }))
              }
              className={`${
                work === workk ? "border-[#FE5164]" : "border-[#505965]"
              } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] transition`}
            >
              {workk}
            </button>
          ))}
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 font-semibold mt-4 max-w-[600px]">
            {error}
          </p>
        )}
      </div>

      {/* Button next */}
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

export default Education;
