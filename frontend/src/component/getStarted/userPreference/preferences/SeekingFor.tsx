import {
  type IProp,
  seekingOptions,
} from "../../../../constants/hardcoded/constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateField } from "../../../../features/welcome/welcomeSlice";

const SeekingFor = ({ index, setIndex }: IProp) => {
  // RTK
  const interested = useSelector(
    (state: RootState) => state.welcome.interestedIn
  );

  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-10">
          Who are you interested in seeing?
        </h1>
        <div className="flex flex-col space-y-6">
          {seekingOptions.map((option, index) => (
            <button
              key={index}
              onClick={() =>
                dispatch(
                  updateField({ field: "interestedIn", value: option.title })
                )
              }
              className={`${
                interested == option.title
                  ? "border-[#FE5164]"
                  : "border-[#505965]"
              } max-w-[600px] py-2 font-semibold text-lg rounded-full border-2 cursor-pointer hover:bg-[#222529]`}
            >
              {option.title}
            </button>
          ))}
        </div>
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

export default SeekingFor;
