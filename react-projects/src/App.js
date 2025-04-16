import React, { useState } from "react";
import "./index.css";
import Menu from "./components/Menu";
import Counter from "./apps/Counter/Counter";
import Quiz from "./apps/Quiz/Quiz";

function App() {
  const [activeApp, setActiveApp] = useState("counter");

  return (
    <div className="app">
      <Menu setActiveApp={setActiveApp} />
      {activeApp === "counter" && <Counter />}
      {activeApp === "quiz" && <Quiz />}
    </div>
  );
}

export default App;
