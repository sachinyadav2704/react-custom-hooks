import { useEffect } from "react";

const useInterval = (callback, delay) => {
  useEffect(() => {
    if (delay === null) return;

    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

export default useInterval;
