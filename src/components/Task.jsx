import { useState } from "react";
import DayForm from "./DayForm";
import { CgRemoveR } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import "../styles/Week.css";

function Task({ tasks, handleEdit, handleRemove }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = (value) => {
    handleEdit(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <DayForm edit={edit} onSubmit={submitEdit} />;
  }

  return tasks?.map((task, index) => (
    <div key={index} className="task-row">
      <div key={task.id}>{task.text}</div>
      <div className="event-icons">
        <CgRemoveR
          className="day-delete-icon"
          onClick={() => handleRemove(task.id)}
        />
        <FaEdit
          className="day-edit-icon"
          onClick={() => setEdit({ id: task.id, value: task.text })}
        />
      </div>
    </div>
  ));
}

export default Task;
