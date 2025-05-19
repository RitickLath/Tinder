interface IProp {
  index: number;
  setIndex: (i: number) => void;
}

const WelcomeScreen = ({ index, setIndex }: IProp) => {
  return (
    <div className="w-full">
      <div className=" min-h-[75dvh] flex flex-col justify-center">
        <h1 className="text-white font-bold text-2xl">Welcome to Tinder</h1>
        <p className="text-[#B9B9C2]">Please follow these House Rules.</p>

        <div className="mt-12">
          <div className="mb-6">
            <h1 className="text-white font-semibold text-lg">Be Yourself.</h1>
            <p className="text-[#B9B9C2]">
              Make sure your photos, age and bio are true to who you are.
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-white font-semibold text-lg">Stay Safe.</h1>
            <p className="text-[#B9B9C2]">
              Dont be too quick to give out personal informations.
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-white font-semibold text-lg">Play it cool.</h1>
            <p className="text-[#B9B9C2]">
              Respect others and treat them as you would like to be treated.
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-white font-semibold text-lg">Be Protective.</h1>
            <p className="text-[#B9B9C2]">Always report bad behavior.</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={() => setIndex(index + 1)}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
