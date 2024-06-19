import { useEffect, useState } from "react";
import "../styles/XPBar.css";

function XPBar({ percentOfBar, resetPercent }) {
  const [level, setLevel] = useState(
    JSON.parse(localStorage.getItem("level")) || 0
  );

  useEffect(() => {
    if (percentOfBar >= 100) {
      setLevel((prevLevel) => parseInt(prevLevel) + 1);
      resetPercent();
    }
  }, [percentOfBar, resetPercent]);

  useEffect(() => {
    localStorage.setItem("level", JSON.stringify(level));
  }, [level]);

  return (
    <div className="xp-container">
      <p>{level}</p>
      <div className="empty-xp-bar">
        <div
          className="xp-bar-fill"
          style={{ width: `${percentOfBar}%` }}
        ></div>
      </div>
    </div>
  );
}

export default XPBar;
