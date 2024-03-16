import React, { useState } from 'react';

const CustomFileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    onUpload(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <p>File selected: {file.name}</p>}
    </div>
  );
};

export default CustomFileUpload;
