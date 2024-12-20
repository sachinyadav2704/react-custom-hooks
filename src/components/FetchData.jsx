import React from "react";
import useFetch from "../hooks/useFetch";
import './global.css'

const FetchData = () => {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="fetchDataContainer">
      <h2>Fetch Data</h2>
      {loading ? <p>Loading...</p> : <ul>{data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>}
    </div>
  );
};

export default FetchData;
