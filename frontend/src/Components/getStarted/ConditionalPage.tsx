import { Phone, Name, Gender, DOB } from "./userPreference/basicInfo";
import OTP from "./userPreference/basicInfo/OTP";
import WelcomeScreen from "./userPreference/basicInfo/WelcomeScreen";
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
} from "./userPreference/preferences";
import LoveLanguage from "./userPreference/preferences/LoveLanguage";

const ConditionalPage = ({ index }: { index: number }) => {
  // const [disable, setDisable] = useState<boolean>(false);
  return (
    <div className="flex-grow flex items-center justify-center">
      {/* Basic Info */}
      {index == 1 && <WelcomeScreen />}
      {index == 2 && <Phone />}
      {index == 3 && <OTP />}
      {index == 4 && <Name />}
      {index == 5 && <Gender />}
      {index == 6 && <DOB />}

      {/* Preferences */}
      {index == 7 && <SexualOrientation />}
      {index == 8 && <SeekingFor />}
      {index == 9 && <LookingFor />}

      {/* Education And Work */}
      {index == 10 && <Education />}

      {/* LifeStyle */}
      {index == 11 && <LifeStyle />}

      {/* Love Language */}
      {index == 12 && <LoveLanguage />}

      {/* What are you Into */}
      {index == 13 && <WhatAreYouInto />}

      {/* Recent Pics of yours */}
      {index == 14 && <RecentPics />}

      {/* Block Contacts */}
      {index == 15 && <BlockedContact />}
    </div>
  );
};

export default ConditionalPage;
