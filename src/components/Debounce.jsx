import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Debounce = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); // 500ms debounce delay

  return (
    <div>
      <h2>Debounce</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type something"
      />
      <p>Debounced Query: {debouncedQuery}</p>
    </div>
  );
};

export default Debounce;
