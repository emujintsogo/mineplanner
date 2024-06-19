import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { CgRemoveR } from "react-icons/cg";

function DayForm(props) {
  const [input, setInput] = useState(props.edit ? props.value : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            <FaEdit />
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button">
            <CgRemoveR />
          </button>
        </>
      )}
    </form>
  );
}

export default DayForm;
