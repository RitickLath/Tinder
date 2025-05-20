import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateField } from "../../../../features/welcome/welcomeSlice";

interface IProp {
  index: number;
  setIndex: (i: number) => void;
}

const Name = ({ index, setIndex }: IProp) => {
  const name = useSelector((state: RootState) => state?.welcome.name);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-10">
          What's your first name?
        </h1>
        <input
          className="w-full max-w-[600px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
          type="text"
          value={name}
          onChange={(e) =>
            dispatch(updateField({ field: "name", value: e.target.value }))
          }
          placeholder="Enter first name"
          aria-label="First name"
        />
        <p className="text-[#B9B9C2]">
          This is how it'll appear on your profile.
        </p>
        <p className="text-[#B9B9C2] font-bold">You can’t change it later.</p>
      </div>

      {/*  */}
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

export default Name;
