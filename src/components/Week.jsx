import "../styles/Week.css";
import Day from "./Day";

function Week() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 5; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(5, 10);
    week.push(day);
  }

  //TODO: have local storage clear week items at friday midnight

  return (
    <div className="week-container">
      {days.map((day, index) => (
        <div key={index} className="day">
          <Day day={day} date={week[index]} />
        </div>
      ))}
    </div>
  );
}

export default Week;
