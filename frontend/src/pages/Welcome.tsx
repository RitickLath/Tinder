import { type FC } from "react";

import ConditionalPage from "../component/getStarted/ConditionalPage";

const Welcome: FC = () => {
  return (
    <div className="bg-[#111418] text-white w-full h-[100dvh]  flex flex-col px-8 py-4">
      {/* Header */}

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto no-scrollbar">
        <ConditionalPage />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Welcome;
