import React from 'react';

const FormInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div style={{width:'100%'}}>
      <div className="block mb-3 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full text-black">
        {label}
      </div>
      <input
        className="flex flex-auto gap-5 justify-between px-6 py-6 bg-white border border-gray-100 border-solid shadow-sm rounded-[46px] max-md:pr-5"
        type="text"
        placeholder={placeholder}
        id={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{width:'100%'}}       
      />       
    </div>
  );
};

export default FormInput;
