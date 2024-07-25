import React, { useState, useReducer, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import styled from "styled-components";

const TodoContainer = styled.div`
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 70vh;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  background-color: #af82f0;
  color: white;
  padding: 10px;
  margin: 0;
`;

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return new Map(JSON.parse(savedTodos));
  });

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(new Map(JSON.parse(storedTodos)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Array.from(todos)));
    console.log("aa");
  }, [todos]);

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
      <TodoContainer>
        <Title>Todo List</Title>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </TodoContainer>
    </>
  );
};

export default TodoApp;
