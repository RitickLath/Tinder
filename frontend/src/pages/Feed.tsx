import { useState } from "react";
import { motion } from "framer-motion";
import { imagesResponse } from "../constants/hardcoded/constants";

const Feed = () => {
  const [index, setIndex] = useState<number>(0);
  const [innerIndex, setInnerIndex] = useState<number>(0);
  
  const handleNext = () => {
    setInnerIndex((prev) => (prev + 1) % imagesResponse[index].images.length);
  };

  return (
    <div
      onClick={handleNext}
      className="p-4 bg-[#111418] text-white w-full h-[80dvh] flex flex-col"
    >
      {/* Progress Bar */}
      <div className="flex gap-2 h-1 mb-4">
        {imagesResponse[index].images.map((_, ind) => (
          <div
            key={ind}
            className={`flex-1 h-1 rounded-full ${
              innerIndex === ind ? "bg-gray-300" : "bg-gray-700"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>

      {/* Image Viewer with Swipe */}
      <div className="flex-1 w-full flex justify-center items-center cursor-pointer relative overflow-hidden rounded-xl">
        <motion.img
          drag
          onDragEnd={(_, info) => {
            if (info.offset.x > 0) {
              console.log("Right");
              setIndex((prev) => (prev + 1) % imagesResponse.length);
              setInnerIndex(0);
            } else {
              console.log("Left");
              setIndex((prev) => (prev + 1) % imagesResponse.length);
              setInnerIndex(0);
            }
          }}
          dragConstraints={{ right: 100, left: -100, top: 4, bottom: 4 }}
          key={imagesResponse[index].images[innerIndex]}
          src={imagesResponse[index].images[innerIndex]}
          alt={`Slide ${innerIndex + 1}`}
          className="h-[80%] object-cover rounded-xl max-w-3xl mx-auto"
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Feed;
