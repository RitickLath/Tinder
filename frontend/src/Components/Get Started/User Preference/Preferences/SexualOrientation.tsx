import { useState } from "react";

const options = [
  {
    title: "Asexual",
    description: "A person who does not experience sexual attraction.",
  },
  {
    title: "Bisexual",
    description: "Attraction to more than one gender.",
  },
  {
    title: "Gay",
    description:
      "A man who is emotionally, romantically, or sexually attracted to other men.",
  },
  {
    title: "Lesbian",
    description:
      "A woman who is emotionally, romantically, or sexually attracted to other women.",
  },
  {
    title: "Pansexual",
    description:
      "Attraction towards people regardless of their gender identity.",
  },
  {
    title: "Queer",
    description:
      "A term used by some to describe sexual orientation that is not exclusively heterosexual.",
  },
  {
    title: "Straight",
    description:
      "A person who is emotionally, romantically, or sexually attracted to people of the opposite gender.",
  },
];

const SexualOrientation = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [showOnProfile, setShowOnProfile] = useState<boolean>(false);

  const handleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected((prev) => prev.filter((item) => item !== index));
    } else {
      setSelected((prev) => [...prev, index]);
    }
  };

  return (
    <div className="w-full min-h-[75vh] mb-12">
      <h1 className="text-white font-bold text-2xl mb-2">
        What's your sexual orientation?
      </h1>
      <h2 className="mb-8 text-[#B9B9C2]">
        Select all that describe you to reflect your identity.
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

      {/* Checkbox to show on profile */}
      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          id="showOnProfile"
          checked={showOnProfile}
          onChange={(e) => setShowOnProfile(e.target.checked)}
          className="w-5 h-5 mr-3 accent-[#FE5164] cursor-pointer"
        />
        <label
          htmlFor="showOnProfile"
          className="text-[#B9B9C2] cursor-pointer"
        >
          Show my orientation on my profile
        </label>
      </div>
    </div>
  );
};

export default SexualOrientation;
