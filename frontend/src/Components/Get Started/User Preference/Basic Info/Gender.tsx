import { useState } from "react";

const Gender = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="w-full min-h-[75dvh]">
      <h1 className="text-white font-bold text-2xl mb-10">
        What's your gender?
      </h1>
      <div className="flex flex-col space-y-6">
        <button
          onClick={() => setSelected(1)}
          className={`${
            selected == 1 ? "border-[#FE5164]" : "border-[#505965]"
          } max-w-[600px] py-2 font-semibold text-lg rounded-full border-2 cursor-pointer hover:bg-[#222529]`}
        >
          Man
        </button>
        <button
          onClick={() => setSelected(2)}
          className={`${
            selected == 2 ? "border-[#FE5164]" : "border-[#505965]"
          } max-w-[600px] py-2 font-semibold text-lg rounded-full border-2 cursor-pointer hover:bg-[#222529]`}
        >
          Woman
        </button>
        <button
          onClick={() => setSelected(3)}
          className={`${
            selected == 3 ? "border-[#FE5164]" : "border-[#505965]"
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
  );
};

export default Gender;
