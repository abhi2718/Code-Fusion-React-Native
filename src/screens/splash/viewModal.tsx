import {useState} from 'react';

const useViewModal = () => {
  const [counter, setCounter] = useState(0);
  return {
    counter,
    setCounter,
  };
};

export default useViewModal;
