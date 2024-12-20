import { useState } from "react";
import useInterval from "../hooks/useInterval";

const Interval = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);

  return (
    <div>
      <h2>Interval</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default Interval;
