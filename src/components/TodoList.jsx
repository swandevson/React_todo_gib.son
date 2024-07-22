import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  console.log([...todos.entries()]);

  return (
    <ol>
      {[...todos.entries()].map(([id, { text, isCompleted }]) => (
        <TodoItem key={id} text={text} isCompleted={isCompleted} />
      ))}
    </ol>
  );
};

export default TodoList;
