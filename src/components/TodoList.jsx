import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  height: 70vh;
  overflow: scroll;
`;

const List = styled.ul`
  padding: 0;
  margin 0;
  `;

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <TodoListContainer>
      <List>
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
      </List>
    </TodoListContainer>
  );
};

export default TodoList;
