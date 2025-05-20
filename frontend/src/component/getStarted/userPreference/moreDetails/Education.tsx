import {
  type IProp,
  educationLevels,
  workOptions,
} from "../../../../constants/hardcoded/constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateField } from "../../../../features/welcome/welcomeSlice";

const Education = ({ index, setIndex }: IProp) => {
  const school = useSelector((state: RootState) => state.welcome.school);
  const education = useSelector(
    (state: RootState) => state.welcome.educationLevel
  );
  const work = useSelector((state: RootState) => state.welcome.work);
  const dispatch = useDispatch();

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
          className="w-full max-w-[600px] border-[1px] border-[#505965] bg-black text-white placeholder-[#B9B9C2] py-3 px-4 rounded-lg focus:outline-none focus:border-[1px] focus:border-blue-600 mb-10"
        />

        {/* Education Level */}
        <h1 className="text-white font-bold text-2xl mb-4">
          What's your highest education level?
        </h1>
        <div className="flex flex-wrap gap-3 mb-10">
          {educationLevels.map((level, index) => (
            <button
              key={index}
              onClick={() =>
                dispatch(updateField({ field: "educationLevel", value: level }))
              }
              className={`${
                education === level ? "border-[#FE5164]" : "border-[#505965]"
              } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529]`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Work */}
        <h1 className="text-white font-bold text-2xl mb-4">
          What do you do for work?
        </h1>
        <div className="flex flex-wrap gap-3">
          {workOptions.map((workk, index) => (
            <button
              key={index}
              onClick={() =>
                dispatch(updateField({ field: "work", value: workk }))
              }
              className={`${
                work === workk ? "border-[#FE5164]" : "border-[#505965]"
              } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529]`}
            >
              {workk}
            </button>
          ))}
        </div>
      </div>

      {/* Button next */}
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

export default Education;
