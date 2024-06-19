import Day from "./Day";
import DayForm from "./DayForm";
import "../styles/Week.css";

function Week() {
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(5, 10);
    week.push(day);
  }

  return (
    <div className="weekly-container">
      <div className="week-title">
        <img src="./public/assets/Clock_JE3.png" className="icons" />
        <h3>Weekly Planner</h3>
      </div>
      <div className="days-of-week">
        {dayNames.map((day, index) => {
          return (
            <div className="day" key={index}>
              <p>{week[index]}</p>
              <Day dayName={day} key={index} />
              <DayForm />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Week;
