import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProgressBar from "../ProgressBar";
import {
  WelcomeScreen,
  Phone,
  OTP,
  Name,
  Gender,
  DOB,
} from "./userPreference/basicInfo";
import {
  Education,
  LifeStyle,
  WhatAreYouInto,
  RecentPics,
  BlockedContact,
} from "./userPreference/moreDetails";
import {
  SexualOrientation,
  SeekingFor,
  LookingFor,
  LoveLanguage,
} from "./userPreference/preferences";

const ConditionalPage = () => {
  const [index, setIndex] = useState(1);
  return (
    <div>
      {/* Progess bar and Letf arrow */}
      <div className="flex items-center justify-between min-h-[10dvh]">
        {index != 1 && (
          <button
            onClick={() => setIndex(index - 1)}
            className="hover:bg-[#222529] p-2 rounded-xl"
          >
            <FaArrowLeft className="text-xl pl-1" />
          </button>
        )}
        <ProgressBar index={index} />
      </div>

      {/* Conditional Rendering */}
      <div className="flex-grow flex items-center justify-center">
        {/* Basic Info */}
        {index == 1 && <WelcomeScreen index={index} setIndex={setIndex} />}
        {index == 2 && <Name index={index} setIndex={setIndex} />}
        {index == 3 && <Phone index={index} setIndex={setIndex} />}
        {index == 4 && <OTP index={index} setIndex={setIndex} />}
        {index == 5 && <Gender index={index} setIndex={setIndex} />}
        {index == 6 && <DOB index={index} setIndex={setIndex} />}

        {/* Preferences */}
        {index == 7 && <SexualOrientation index={index} setIndex={setIndex} />}
        {index == 8 && <SeekingFor index={index} setIndex={setIndex} />}
        {index == 9 && <LookingFor index={index} setIndex={setIndex} />}

        {/* Education And Work */}
        {index == 10 && <Education index={index} setIndex={setIndex} />}

        {/* LifeStyle */}
        {index == 11 && <LifeStyle index={index} setIndex={setIndex} />}

        {/* Love Language */}
        {index == 12 && <LoveLanguage index={index} setIndex={setIndex} />}

        {/* What are you Into */}
        {index == 13 && <WhatAreYouInto index={index} setIndex={setIndex} />}

        {/* Block Contacts */}
        {index == 14 && <BlockedContact index={index} setIndex={setIndex} />}

        {/* Recent Pics of yours */}
        {index == 15 && <RecentPics />}
      </div>
    </div>
  );
};

export default ConditionalPage;
