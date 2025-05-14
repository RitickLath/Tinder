import { useState } from "react";

const options = [
  {
    title: "Physical touch",
    description: "Expressing and receiving love through physical affection.",
  },
  {
    title: "Words of affirmation",
    description:
      "Expressing love through spoken or written words of support and affection.",
  },
  {
    title: "Quality time",
    description:
      "Giving someone your undivided attention to show love and care.",
  },
  {
    title: "Gifts",
    description: "Expressing love by giving thoughtful gifts.",
  },
  {
    title: "Acts of service",
    description: "Showing love by doing helpful things for others.",
  },
];

const LoveLanguage = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected((prev) => prev.filter((item) => item !== index));
    } else {
      setSelected((prev) => [...prev, index]);
    }
  };

  return (
    <div className="w-full min-h-[75dvh] mb-12">
      <h1 className="text-white font-bold text-2xl mb-2">
        What's your love language?
      </h1>
      <h2 className="mb-8 text-[#B9B9C2]">
        Select all that resonate with how you express and receive love.
      </h2>
      <div className="lg:flex lg:flex-wrap lg:gap-x-6">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`${
              selected.includes(index) ? "border-[#FE5164]" : "border-[#505965]"
            } px-4 py-3 cursor-pointer w-full max-w-[600px] lg:max-w-[500px] border-2 mb-2 rounded-lg`}
          >
            <h1 className="font-semibold">{option.title}</h1>
            <p className="text-[#B9B9C2]">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveLanguage;
