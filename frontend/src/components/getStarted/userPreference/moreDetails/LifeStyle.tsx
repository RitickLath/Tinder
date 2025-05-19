import { useState, type FC } from "react";

const drinkingOptions: string[] = [
  "Never",
  "Occasionally",
  "Socially",
  "Regularly",
];
const smokingOptions: string[] = [
  "Social smoker",
  "Smoker when drinking",
  "Non-smoker",
  "Smoker",
  "Trying to quit",
];
const workoutOptions: string[] = ["Everyday", "Often", "Sometimes", "Never"];

const LifeStyle: FC = () => {
  const [selectedDrinking, setSelectedDrinking] = useState<string>("");
  const [selectedSmoking, setSelectedSmoking] = useState<string>("");
  const [selectedWorkout, setSelectedWorkout] = useState<string>("");

  return (
    <div className="w-full min-h-[75dvh]">
      <h1 className="text-white font-bold text-2xl mb-2">
        Let’s talk lifestyle habits!
      </h1>
      <h2 className="text-[#B9B9C2] mb-8">
        Do their habits match yours? You go first.
      </h2>

      {/* Drinking Habits */}
      <div className="border-t border-[#505965] py-6 max-w-[600px]">
        <h2 className="text-white font-semibold text-lg">
          How often do you drink?
        </h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {drinkingOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedDrinking(option)}
              className={`${
                selectedDrinking === option
                  ? "border-[#FE5164]"
                  : "border-[#505965]"
              } py-2 px-4 cursor-pointer rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529]`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Smoking Habits */}
      <div className="border-t border-[#505965] py-6 max-w-[600px]">
        <h2 className="text-white font-semibold text-lg">
          How often do you smoke?
        </h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {smokingOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedSmoking(option)}
              className={`${
                selectedSmoking === option
                  ? "border-[#FE5164]"
                  : "border-[#505965]"
              } py-2 px-4 cursor-pointer rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529]`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Workout Habits */}
      <div className="border-t border-[#505965] py-6 max-w-[600px]">
        <h2 className="text-white font-semibold text-lg">Do you workout?</h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {workoutOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedWorkout(option)}
              className={`${
                selectedWorkout === option
                  ? "border-[#FE5164]"
                  : "border-[#505965]"
              } py-2 px-4 cursor-pointer rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529]`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;


// Love Language
