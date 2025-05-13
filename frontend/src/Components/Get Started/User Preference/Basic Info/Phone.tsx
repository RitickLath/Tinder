import { useState } from "react";

const countryCodes: { code: string; country: string }[] = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+971", country: "UAE" },
];

const Phone = () => {
  const [selectedCode, setSelectedCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="w-full min-h-[75vh]">
      <h1 className="text-white font-bold text-2xl mb-4">
        What's your phone number?
      </h1>

      <div className="flex items-center gap-4 max-w-[600px]">
        {/* Country Code Selector */}
        <select
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
          className="border-[1px] border-[#505965] bg-black text-white py-3 px-2 rounded-lg focus:outline-none focus:border-[1px] focus:border-blue-600"
        >
          {countryCodes.map((country, index) => (
            <option key={index} value={country.code}>
              {country.code} {country.country}
            </option>
          ))}
        </select>

        {/* Phone Number Input */}
        <input
          type="tel"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="flex-grow border-[1px] border-[#505965] bg-black text-white placeholder-[#B9B9C2] py-3 px-4 rounded-lg focus:outline-none focus:border-[1px] focus:border-blue-600"
        />
      </div>
    </div>
  );
};

export default Phone;
