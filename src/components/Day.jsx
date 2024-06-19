import "../styles/Day.css";

function Day(props) {
  return (
    <div className="day-container">
      <h4>{props.dayName}</h4>
    </div>
  );
}

export default Day;
