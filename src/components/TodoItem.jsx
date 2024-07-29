import React, { useState } from "react";
import styled from "styled-components";

const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  background-color: white;
`;

const Checkbox = styled.input`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TextInput = styled.input`
  flex: 1;
`;

const Text = styled.span`
  flex: 1;
  line-height: center;
  align-items: center;
  font-size: 1.15rem;
  text-decoration: ${({ $isChecked }) =>
    $isChecked ? "line-through" : "none"};
  color: ${({ $isChecked }) => ($isChecked ? "gray" : "black")};
`;

const Button = styled.button`
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  border: 1px solid grey;
  cursor: pointer;
  color: white;

  &:hover {
    opacity: 0.8;
  }

  &.save-button {
    background-color: #28a745;
  }

  background-color: inherit;
`;

const TodoItem = ({ id, text, isCompleted, onDelete, onEdit }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onEdit(id, text, !isChecked);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, editedText, isChecked);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <TodoListItem className="todo-item">
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <TextInput
          type="text"
          value={editedText}
          onChange={handleInputChange}
        />
      ) : (
        <Text $isChecked={isChecked}>{text}</Text>
      )}
      {isEditing ? ( // todo 수정 여부에 따른 버튼 및 onClick 함수 할당을 다르게 함
        <Button onClick={handleSaveClick}>💾</Button>
      ) : (
        <Button onClick={handleEditClick}>✏️</Button>
      )}
      <Button onClick={handleDeleteClick}>🗑️</Button>
    </TodoListItem>
  );
};

export default TodoItem;
