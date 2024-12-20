import { useEffect } from "react";

const useTimeout = (callback, delay) => {
  useEffect(() => {
    if (delay === null) return;

    const timeoutId = setTimeout(callback, delay);

    return () => clearTimeout(timeoutId);
  }, [callback, delay]);
};

export default useTimeout;
