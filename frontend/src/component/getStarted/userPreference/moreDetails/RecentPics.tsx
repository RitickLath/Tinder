import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecentPics = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState(Array(4).fill(null));

  // If the 1st element in images is null don't navigate.
  const handleNext = () => {
    if (images?.[0] == null) return;
    navigate("/app/recs");
  };

  // @ts-ignore
  const handleImageUpload = async (e, idx) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/upload",
        formData,
        { withCredentials: true }
      );

      if (response.data.success) {
        const imageUrl = response.data?.data;
        const newImages = [...images];
        newImages[idx] = imageUrl;
        setImages(newImages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hasAtLeastOneImage = images.some((img) => img);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full min-h-[75dvh] flex flex-col justify-center">
        <h1 className="text-white font-bold text-2xl sm:text-3xl mb-2">
          Add your recent pics
        </h1>
        <h2 className="text-[#B9B9C2] text-sm sm:text-base mb-6">
          Upload 2 photos to start. Add 4 or more to make your profile stand
          out.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
          {images.map((img, idx) => (
            <label
              key={idx}
              className="w-full aspect-[3/4] border-2 border-dashed border-[#B9B9C2] rounded-lg flex items-center justify-center text-4xl text-[#B9B9C2] cursor-pointer hover:bg-white/5 transition relative overflow-hidden"
            >
              <input
                onChange={(e) => handleImageUpload(e, idx)}
                type="file"
                className="hidden"
              />
              {img ? (
                <img
                  src={img}
                  alt={`Uploaded ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                "+"
              )}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 w-full flex justify-center">
        <button
          onClick={handleNext}
          disabled={!hasAtLeastOneImage}
          className={`w-full max-w-3xl py-3 font-semibold text-white rounded-2xl transition duration-300 ${
            hasAtLeastOneImage
              ? "bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentPics;
