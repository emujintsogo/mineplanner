import Header from "./components/Header";
import Footer from "./components/Footer";
import Reflections from "./components/Reflections";
import Week from "./components/Week";
import TodoList from "./components/TodoList";
import XPBar from "./components/XPBar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [percentOfBar, setPercent] = useState(() => {
    const storedPercent = localStorage.getItem("percent");
    return storedPercent ? JSON.parse(storedPercent) : 0;
  });

  useEffect(() => {
    localStorage.setItem("percent", JSON.stringify(percentOfBar));
  }, [percentOfBar]);

  const resetPercent = () => {
    setPercent(0);
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="left-container">
          <TodoList setPercent={setPercent} />
        </div>
        <div className="right-container">
          <Week />
          <Reflections />
        </div>
      </div>
      <XPBar percentOfBar={percentOfBar} resetPercent={resetPercent} />
      <Footer />
    </>
  );
}

export default App;
