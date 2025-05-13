const DOB = () => {
  return (
    <div className="w-full min-h-[75vh]">
      <h1 className="text-white font-bold text-2xl mb-10">Your b-day?</h1>
      <div className="w-full flex space-x-2">
        <input
          className="w-[100px] lg:w-[200px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
          type="number"
          required
          placeholder="DD"
          aria-label="Date"
        />
        <input
          className="w-[100px] lg:w-[200px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
          type="number"
          required
          placeholder="MM"
          aria-label="Month"
        />
        <input
          className="w-[100px] lg:w-[200px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
          type="number"
          required
          placeholder="YYYY"
          aria-label="Year"
        />
      </div>
      <p className="text-[#B9B9C2]">
        Your profile shows your age, not your birthdate.
      </p>
    </div>
  );
};

export default DOB;
