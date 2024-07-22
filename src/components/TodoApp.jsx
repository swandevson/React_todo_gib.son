import React, { useState, useReducer } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = (TodoItemProps) => {
  const [todos, setTodos] = useState(new Map());

  const addTodo = (text) => {
    const id = new Date().getTime();
    const newTodos = new Map(todos);
    newTodos.set(id, { text, isCompleted: false });

    setTodos(newTodos);
  };

  const editTodo = (id, text, isCompleted) => {
    const newTodos = new Map(todos);
    newTodos.set(id, { text, isCompleted });

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = new Map(todos);
    newTodos.delete(id);

    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoApp;
