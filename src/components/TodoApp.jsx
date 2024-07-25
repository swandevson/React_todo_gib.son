import React, { useReducer, useEffect } from "react";
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

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newAddTodos = new Map(state);
      newAddTodos.set(action.payoad.id, {
        text: action.payload.text,
        isCompleted: false,
      });
      return newAddTodos;

    case "EDIT_TODO":
      const newEditTodos = new Map(state);
      newEditTodos.set(action.payload.id, {
        text: action.payload.text,
        isCompleted: action.payload.isCompleted,
      });
      return newEditTodos;

    case "DELETE_TODO":
      const newDeleteTodos = new Map(state);
      newDeleteTodos.delete(action.payload);
      return newDeleteTodos;

    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const savedTodos = localStorage.getItem("todos");
    const filteredTodos = new Map(
      JSON.parse(savedTodos).filter(([, value]) => !value.isCompleted)
    );

    console.log(filteredTodos);

    return filteredTodos;
  });

  const addTodo = (text) => {
    const id = new Date().getTime();
    dispatch({ type: "ADD_TODO", payload: { id, text } });
  };

  const editTodo = (id, text, isCompleted) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text, isCompleted } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Array.from(todos)));
  }, [todos]);

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
