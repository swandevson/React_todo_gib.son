import React, { useState } from "react";

const TodoItem = ({ id, text, isCompleted, onDelete, onEdit }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onEdit(id, text, isChecked);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, editedText, isChecked);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  console.log(isCompleted);
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {editing ? (
        <input type="text" value={editedText} onChange={handleInputChange} />
      ) : (
        <span
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            color: isChecked ? "gray" : "black",
          }}
        >
          {text}
        </span>
      )}
      {editing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};

export default TodoItem;
