import { useState } from "react";

const interests = [
  "Food and drinks",
  "Gaming",
  "Going Out",
  "Music",
  "Outdoor and adventure",
  "Social and content",
  "Sports and fitness",
  "Staying in",
  "TV and movies",
  "Values and causes",
  "Wellness and lifestyle",
  "Art & Culture",
  "Reading",
  "Traveling",
  "Photography",
  "Fashion & Style",
  "Pets & Animals",
  "Technology & Gadgets",
  "Mindfulness & Meditation",
  "DIY & Crafts",
  "Board Games & Puzzles",
  "Cooking & Baking",
  "Learning & Education",
  "Cars & Motorcycles",
  "Finance & Investing",
  "Comedy & Memes",
];

const WhatAreYouInto = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    const isSelected = selectedInterests.includes(interest);

    if (isSelected) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="w-full min-h-[75dvh]">
      <h1 className="text-white font-bold text-2xl mb-2">What are you into?</h1>
      <h2 className="text-[#B9B9C2] mb-4">
        Select your interests to help match with like-minded people.
      </h2>
      <p className="text-[#FE5164] font-medium mb-6">
        {selectedInterests.length}/5 selected
      </p>

      <div className="flex flex-wrap gap-3 max-w-[700px]">
        {interests.map((interest, index) => (
          <button
            key={index}
            onClick={() => toggleInterest(interest)}
            className={`${
              selectedInterests.includes(interest)
                ? "border-[#FE5164]"
                : "border-[#505965]"
            } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] ${
              selectedInterests.length >= 5 &&
              !selectedInterests.includes(interest)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            // disable button if 5 selected and selection hover is not already selected
            disabled={
              selectedInterests.length >= 5 &&
              !selectedInterests.includes(interest)
            }
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WhatAreYouInto;
