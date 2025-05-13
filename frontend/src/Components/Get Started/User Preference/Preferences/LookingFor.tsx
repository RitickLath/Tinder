import { useState } from "react";

interface IOption {
  emoji: string;
  title: string;
}

const options: IOption[] = [
  { emoji: "💝", title: "Long-term partner" },
  { emoji: "😍", title: "Long-term, open to short" },
  { emoji: "🥂", title: "Short-term, open to long" },
  { emoji: "🎉", title: "Short-term fun" },
  { emoji: "👋", title: "New friends" },
  { emoji: "🤔", title: "Still figuring it out" },
];

const LookingFor = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-full min-h-[75vh]">
      <h1 className="text-white font-bold text-2xl mb-2">
        What are you looking for?
      </h1>
      <h2 className="mb-8 text-[#B9B9C2]">
        All good if it changes. There's something for everyone.
      </h2>
      <div className="flex flex-wrap gap-4 lg:max-w-[800px]">
        {options.map((element, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`${
              selected === index ? "border-[#FE5164]" : "border-[#505965]"
            } flex flex-col items-center justify-center text-center cursor-pointer w-full max-w-[200px] h-[120px] border-2 rounded-2xl hover:bg-[#222529] transition`}
          >
            <h1 className="text-xl mb-2">{element.emoji}</h1>
            <h2 className="max-w-[100px] font-semibold text-white">
              {element.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookingFor;
