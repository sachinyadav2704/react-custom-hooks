import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const WindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default WindowSize;
