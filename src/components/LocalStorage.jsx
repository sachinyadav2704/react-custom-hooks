import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [value, setValue] = useLocalStorage("name", "");
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSave = () => setValue(input);

  return (
    <div>
      <h2>LocalStorage</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter value"
      />
      <button onClick={handleSave}>Save</button>
      <p>Stored Value: {value}</p>
    </div>
  );
};

export default LocalStorage;
