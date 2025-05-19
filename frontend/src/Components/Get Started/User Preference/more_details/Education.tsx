import { useState } from "react";

const educationLevels: string[] = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
];
const workOptions: string[] = [
  "Student",
  "Employed",
  "Self-Employed",
  "Unemployed",
  "Retired",
  "Prefer not to say",
];

const Education = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [selectedEducation, setSelectedEducation] = useState<string>("");
  const [selectedWork, setSelectedWork] = useState<string>("");

  return (
    <div className="w-full min-h-[75vh]">
      {/* School */}
      <h1 className="text-white font-bold text-2xl mb-4">
        Which school did you attend?
      </h1>
      <input
        type="text"
        value={selectedSchool}
        onChange={(e) => setSelectedSchool(e.target.value)}
        placeholder="Enter your school name"
        className="w-full max-w-[600px] border-[1px] border-[#505965] bg-black text-white placeholder-[#B9B9C2] py-3 px-4 rounded-lg focus:outline-none focus:border-[1px] focus:border-blue-600 mb-10"
      />

      {/* Education Level */}
      <h1 className="text-white font-bold text-2xl mb-4">
        What's your highest education level?
      </h1>
      <div className="flex flex-wrap gap-3 mb-10">
        {educationLevels.map((level, index) => (
          <button
            key={index}
            onClick={() => setSelectedEducation(level)}
            className={`${
              selectedEducation === level
                ? "border-[#FE5164]"
                : "border-[#505965]"
            } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529]`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Work */}
      <h1 className="text-white font-bold text-2xl mb-4">
        What do you do for work?
      </h1>
      <div className="flex flex-wrap gap-3">
        {workOptions.map((work, index) => (
          <button
            key={index}
            onClick={() => setSelectedWork(work)}
            className={`${
              selectedWork === work ? "border-[#FE5164]" : "border-[#505965]"
            } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529]`}
          >
            {work}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Education;
