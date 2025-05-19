const ProgressBar = ({ index }: { index: number }) => {
  return (
    <div className="flex-1 mx-4">
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#FC5F70] to-[#E419BB] transition-all duration-300"
          style={{ width: `${(100 / 15) * index}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
