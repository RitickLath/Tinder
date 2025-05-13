import { useState } from "react";

const seekingOptions = [
  { title: "Man" },
  { title: "Woman" },
  { title: "Everyone" },
];

const SeekingFor = () => {
  const [selected, setSelected] = useState<number>(-1);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="w-full min-h-[75vh]">
      <h1 className="text-white font-bold text-2xl mb-10">
        Who are you interested in seeing?
      </h1>
      <div className="flex flex-col space-y-6">
        {seekingOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`${
              selected == index ? "border-[#FE5164]" : "border-[#505965]"
            } max-w-[600px] py-2 font-semibold text-lg rounded-full border-2 cursor-pointer hover:bg-[#222529]`}
          >
            {option.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeekingFor;
