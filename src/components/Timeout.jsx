import React, { useState } from "react";
import useTimeout from "../hooks/useTimeout";

const Timeout = () => {
  const [message, setMessage] = useState("Waiting...");

  useTimeout(() => {
    setMessage("Timeout finished!");
  }, 3000); // Wait for 3 seconds before setting message

  return (
    <div>
      <h2>Timeout</h2>
      <p>{message}</p>
    </div>
  );
};

export default Timeout;
