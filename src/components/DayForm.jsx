import { useState } from "react";
import "../styles/Week.css";
import { RiAddBoxLine } from "react-icons/ri";

function DayForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => setInput(e.target.value);

  return (
    <form onSubmit={handleSubmit} className="day-task-form">
      {props.edit ? (
        <div className="day-edit">
          <input
            value={input}
            placeholder="Update event"
            onChange={handleChange}
            name="text"
            className="event-input-edit"
          />
          <button onClick={handleSubmit}>Update</button>
        </div>
      ) : (
        <div className="input-add">
          <input
            value={input}
            placeholder="Add event"
            onChange={handleChange}
            name="text"
            className="event-input"
          />
          <RiAddBoxLine className="add-icon" onClick={handleSubmit} />
        </div>
      )}
    </form>
  );
}

export default DayForm;
