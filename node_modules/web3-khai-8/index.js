import React, { useState } from 'react';

const CustomComment = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onSubmit(comment);
    setComment('');
  };

  return (
    <div>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CustomComment;
