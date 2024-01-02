import React from 'react';
const Dropdown = ({ label, id, options, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-white">{label}</label>
      <select
        id={id}
        className="px-3 py-2 rounded-md border-2 border-cyan-600 shadow-sm"
        value={value}
        onChange={onChange}
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

export default Dropdown;
