import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit }) => {
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
          onEdit={onEdit}
        />
      ))}
    </ol>
  );
};

export default TodoList;
