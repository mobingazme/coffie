import React, { useState } from 'react';
import { Icon } from '@iconify/react';


const Counter = () => {
  const [counts, setCounts] = useState({
    button1: 1,
    
  });

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    if (counts[id] > 1) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1,
      }));
    }
  };

  const handleIncrementClick = (id) => () => {
    handleIncrement(id);
  };

  const handleDecrementClick = (id) => () => {
    handleDecrement(id);
  };

  return (
    <div>
      {Object.keys(counts).map((id) => (
        <div className="flex items-center" key={1}>
          <Icon
            className="text-yellow cursor-pointer"
            onClick={handleIncrementClick(id)}
            icon={'gg:math-plus'}
          />
          <h4 className="text-gray-500 px-2">{counts[id]}</h4>
          <Icon
            className="text-yellow cursor-pointer"
            onClick={handleDecrementClick(id)}
            icon={'gg:math-minus'}
          />
        </div>
      ))}
    </div>
  );
};

export default Counter;