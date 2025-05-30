import React from "react";
import "./App.css";

function App() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="menu-icon">☰</div>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
          />
          <span className="country-code">IN</span>
        </div>
      </div>
      <div className="center-section">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">🔍</button>
        </div>
        <button className="mic-button">🎤</button>
      </div>
      <div className="right-section">
        <button className="create-button">＋ Create</button>
        <div className="notifications-icon">🔔</div>
        <div className="profile">b</div>
      </div>
    </header>
  );
}

export default App;
