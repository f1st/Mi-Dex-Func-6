import React from 'react';
import Calendar from 'react-calendar';

const CustomCalendar = ({ date, onDateChange }) => {
  return (
    <Calendar value={date} onChange={onDateChange} />
  );
};

export default CustomCalendar;
