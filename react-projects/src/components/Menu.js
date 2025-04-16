import React from "react";
import "./Menu.css";

function Menu({ setActiveApp }) {
  return (
    <nav className="menu">
      <button onClick={() => setActiveApp("counter")}>Counter</button>
      <button onClick={() => setActiveApp("quiz")}>Quiz</button>
    </nav>
  );
}

export default Menu;
