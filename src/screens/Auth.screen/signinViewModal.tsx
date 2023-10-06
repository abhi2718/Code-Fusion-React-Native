import React, {useState} from 'react';

export const useViewModal = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(preValue => preValue + 1);
  const countDown = () => setCount(preValue => preValue - 1);
  return {
    count,
    countUp,
    countDown,
  };
};
