import "../styles/Reflections.css";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";

function Reflections() {
  const storedText = JSON.parse(localStorage.getItem("reflection"));
  const [text, setText] = useState(storedText || "");
  const [editMode, setEditMode] = useState(!storedText);

  useEffect(() => {
    localStorage.setItem("reflection", JSON.stringify(text));
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className="reflections-container">
      <div className="reflections-header">
        <img className="icons" src="assets/Eye_of_Ender_JE2_BE2.png" />
        <h3>Reflections</h3>
        <FaEdit className="edit-icon" onClick={handleEdit} />
      </div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write any reflections on your productivity here"
            value={text}
            onChange={handleTextChange}
          ></input>
        </form>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}

export default Reflections;
