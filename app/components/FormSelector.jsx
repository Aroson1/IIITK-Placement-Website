import React, { useState } from 'react';

const FormSelector = ({ label, placeholder, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <div className="block mb-3 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full text-black" htmlFor={label}>
        {label}
      </div>
      <select
        className="flex flex-auto gap-5 justify-between px-6 py-6 bg-white border border-gray-100 border-solid shadow-sm rounded-[46px] max-md:pr-5"
        value={selectedOption}
        onChange={handleOptionChange}
        id={label}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelector;
