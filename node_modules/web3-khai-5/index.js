import React, { useState } from 'react';

const CustomFilter = ({ options, onFilter }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onFilter(value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="">All</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default CustomFilter;
