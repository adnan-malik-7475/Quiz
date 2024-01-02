import React from 'react';

const TextInput = ({ label, id, type, placeholder, value, onChange,className }) => {
  return (
    <div className="flex flex-col ">
      <label className={className}>{label}</label>
      <input
        type={type}
        id={id}
        className="px-3 py-2 rounded-md border-2 border-cyan-600   shadow-sm "
       placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
