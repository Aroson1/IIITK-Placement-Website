import React from 'react';

const FormSelector = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label className="block mb-3 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full text-black">
        {label}
      </label>
      <select
        className="flex flex-auto gap-5 justify-between px-6 py-6 bg-white border border-gray-100 border-solid shadow-sm rounded-[46px] max-md:pr-5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelector;
