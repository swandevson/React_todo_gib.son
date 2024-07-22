import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  console.log([...todos.entries()]);

  return (
    <ol>
      {[...todos.entries()].map(([id, { text, isCompleted }]) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          isCompleted={isCompleted}
          onDelete={onDelete}
        />
      ))}
    </ol>
  );
};

export default TodoList;
