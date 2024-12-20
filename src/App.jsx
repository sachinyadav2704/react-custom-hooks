import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FetchData from "./components/FetchData";
import LocalStorage from "./components/LocalStorage";
import Debounce from "./components/Debounce";
import WindowSize from "./components/WindowSize";
import OnClickOutside from "./components/OnClickOutside";
import Interval from "./components/Interval";
import Timeout from "./components/Timeout";
import Counter from "./components/Counter";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/fetch">Fetch Data</Link></li>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/local-storage">Local Storage</Link></li>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/debounce">Debounce</Link></li>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/window-size">Window Size</Link></li>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/on-click-outside">OnClick Outside</Link></li>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/interval">Interval</Link></li>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/timeout">Timeout</Link></li>
            <li><Link style={{ textDecoration: 'none', color:"white" }} to="/counter">Counter</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/fetch" element={<FetchData />} />
          <Route path="/local-storage" element={<LocalStorage />} />
          <Route path="/debounce" element={<Debounce />} />
          <Route path="/window-size" element={<WindowSize />} />
          <Route path="/on-click-outside" element={<OnClickOutside />} />
          <Route path="/interval" element={<Interval />} />
          <Route path="/timeout" element={<Timeout />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
