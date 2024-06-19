import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "../styles/TodoList.css";

function TodoList(props) {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("task");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("task", JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos to localStorage:", error);
    }
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    let newTodos = [];
    if (todos === null) {
      newTodos = [todo];
    } else {
      newTodos = [todo, ...todos];
    }

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="todo-header">
        <img
          className="icons"
          src="public/assets/Birch_Hanging_Sign_29_JE1_BE1.png"
        />
        <h2>Todo List</h2>
      </div>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        setPercent={props.setPercent}
      />
    </>
  );
}

export default TodoList;
