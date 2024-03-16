import React from 'react';
import { useDrop } from 'react-dnd';

const CustomDropZone = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'transparent', padding: '10px' }}>
      Drop here
    </div>
  );
};

export default CustomDropZone;
