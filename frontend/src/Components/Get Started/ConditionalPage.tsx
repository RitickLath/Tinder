import { Phone, Name, Gender, DOB } from "./User Preference/Basic Info";
import WelcomeScreen from "./User Preference/Basic Info/WelcomeScreen";
import {
  Education,
  LifeStyle,
  WhatAreYouInto,
  RecentPics,
  BlockedContact,
} from "./User Preference/More Details";
import {
  SexualOrientation,
  SeekingFor,
  LookingFor,
} from "./User Preference/Preferences";
import LoveLanguage from "./User Preference/Preferences/LoveLanguage";

const ConditionalPage = ({ index }: { index: number }) => {
  return (
    <div className="flex-grow flex items-center justify-center">
      {/* Basic Info */}
      {index == 1 && <WelcomeScreen />}
      {index == 2 && <Phone />}
      {index == 3 && <Name />}
      {index == 4 && <Gender />}
      {index == 5 && <DOB />}

      {/* Preferences */}
      {index == 6 && <SexualOrientation />}
      {index == 7 && <SeekingFor />}
      {index == 8 && <LookingFor />}

      {/* Education And Work */}
      {index == 9 && <Education />}

      {/* LifeStyle */}
      {index == 10 && <LifeStyle />}

      {/* Love Language */}
      {index == 11 && <LoveLanguage />}

      {/* What are you Into */}
      {index == 12 && <WhatAreYouInto />}

      {/* Recent Pics of yours */}
      {index == 13 && <RecentPics />}

      {/* Block Contacts */}
      {index == 14 && <BlockedContact />}
    </div>
  );
};

export default ConditionalPage;
