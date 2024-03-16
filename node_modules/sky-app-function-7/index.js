import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

const ImageUpload = ({ onChange }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    onChange(file);
  };

  return (
    <>
      <Input type="file" onChange={handleFileChange} />
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
    </>
  );
};

export default ImageUpload;
