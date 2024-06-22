import { useState } from "react";
import TodoForm from "./TodoForm";
import { FaEdit } from "react-icons/fa";
import { CgRemoveR } from "react-icons/cg";
import { FaRegSquareCheck } from "react-icons/fa6";
import "../styles/TodoList.css";

function Todo({ todos, removeTodo, completeTodo, updateTodo, setPercent }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos?.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="todo-icons">
        <CgRemoveR
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <FaEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        <FaRegSquareCheck
          onClick={() => {
            removeTodo(todo.id);
            setPercent((prevPercent) => {
              const newPercent = prevPercent + 15;
              return newPercent >= 100 ? 100 : newPercent;
            });
          }}
          className="check-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
