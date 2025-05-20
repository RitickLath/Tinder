import type { IProp } from "../../../../constants/hardcoded/constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateField } from "../../../../features/welcome/welcomeSlice";

const Gender = ({ index, setIndex }: IProp) => {
  // RTK
  const gender = useSelector((state: RootState) => state.welcome.gender);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-10">
          What's your gender?
        </h1>
        <div className="flex flex-col space-y-6">
          <button
            onClick={() =>
              dispatch(updateField({ field: "gender", value: "Male" }))
            }
            className={`${
              gender == "Male" ? "border-[#FE5164]" : "border-[#505965]"
            } max-w-[600px] py-2 font-semibold text-lg rounded-full border-2 cursor-pointer hover:bg-[#222529]`}
          >
            Male
          </button>
          <button
            onClick={() =>
              dispatch(updateField({ field: "gender", value: "Female" }))
            }
            className={`${
              gender == "Female" ? "border-[#FE5164]" : "border-[#505965]"
            } max-w-[600px] py-2 font-semibold text-lg rounded-full border-2 cursor-pointer hover:bg-[#222529]`}
          >
            Female
          </button>
          <button
            onClick={() =>
              dispatch(updateField({ field: "gender", value: "Other" }))
            }
            className={`${
              gender == "Other" ? "border-[#FE5164]" : "border-[#505965]"
            } max-w-[600px] py-2 font-semibold text-lg rounded-full border-2 cursor-pointer hover:bg-[#222529]`}
          >
            Other
          </button>
        </div>
        <p className="text-[#B9B9C2] mt-4">
          This is how it'll appear on your profile.
        </p>
        <p className="text-[#B9B9C2] font-bold">You can’t change it later.</p>
      </div>
      {/* Button Next */}
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

export default Gender;
