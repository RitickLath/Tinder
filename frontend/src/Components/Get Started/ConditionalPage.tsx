import { Phone, Name, Gender, DOB } from "./User Preference/Basic Info";
import WelcomeScreen from "./User Preference/Basic Info/WelcomeScreen";
import BlockedContact from "./User Preference/BlockedContact";
import Education from "./User Preference/Education";
import LifeStyle from "./User Preference/LifeStyle";
import {
  SexualOrientation,
  SeekingFor,
  LookingFor,
  Distance,
} from "./User Preference/Preferences";
import RecentPics from "./User Preference/RecentPics";
import WhatAreYouInto from "./User Preference/WhatAreYouInto";
import WhatAttracts from "./User Preference/WhatAttracts";

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
      {index == 9 && <Distance />}

      {/* Education And Work */}
      {index == 10 && <Education />}

      {/* LifeStyle */}
      {index == 11 && <LifeStyle />}

      {/* What are you Into */}
      {index == 12 && <WhatAreYouInto />}

      {/* What attracts you */}
      {index == 13 && <WhatAttracts />}

      {/* Recent Pics of yours */}
      {index == 14 && <RecentPics />}

      {/* Block Contacts */}
      {index == 15 && <BlockedContact />}
    </div>
  );
};

export default ConditionalPage;
