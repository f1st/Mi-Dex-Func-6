import React from 'react';
import ReactPlayer from 'react-player';

const CustomVideoPlayer = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      controls
      width="100%"
      height="auto"
    />
  );
};

export default CustomVideoPlayer;
