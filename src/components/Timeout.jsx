import { useState, useEffect } from "react";
// import useTimeout from "../hooks/useTimeout";

const Timeout = () => {
  // const [message, setMessage] = useState("Waiting...");
  const [remainingTime, setRemainingTime] = useState(5);
  // useTimeout(() => {
  //   setMessage("Timeout finished!");
  // }, 5000);

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1); 
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [remainingTime]);

  return (
    <div>
      <h2>Timeout</h2>
      {/* <p>{message}</p> */}
      {remainingTime > 0 ? (
        <p>Waiting for {remainingTime} second{remainingTime > 1 ? "s" : ""}...</p> 
      ) : (
        <p>Timeout finished!</p>
      )}
    </div>
  );
};

export default Timeout;
