import React, { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const OnClickOutside = () => {
  const [isClickedOutside, setIsClickedOutside] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsClickedOutside(true));

  return (
    <div>
      <h2>Click Outside to Trigger Event</h2>
      <div ref={ref} style={{ padding: "20px", background: "#f0f0f0" }}>
        Click inside this box to do nothing. Click outside the box to trigger.
      </div>
      {isClickedOutside && <p>You clicked outside the box!</p>}
    </div>
  );
};

export default OnClickOutside;
