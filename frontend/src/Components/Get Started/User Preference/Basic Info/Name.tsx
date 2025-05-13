const Name = () => {
  return (
    <div className="w-full min-h-[75vh]">
      <h1 className="text-white font-bold text-2xl mb-10">
        What's your first name?
      </h1>
      <input
        className="w-full max-w-[600px] border-[2px] border-[#505965] py-3 px-4 rounded-lg bg-black text-white placeholder-[#B9B9C2] focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-700 mb-3"
        type="text"
        placeholder="Enter first name"
        aria-label="First name"
      />
      <p className="text-[#B9B9C2]">
        This is how it'll appear on your profile.
      </p>
      <p className="text-[#B9B9C2] font-bold">You can’t change it later.</p>
    </div>
  );
};

export default Name;
