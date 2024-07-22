import React, { useState } from "react";

const TodoItem = ({ text, isCompleted }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleDeleteClick = () => {
    // Implement delete functionality here
  };

  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      {editing ? (
        <input type="text" value={editedText} onChange={handleInputChange} />
      ) : (
        <span>{text}</span>
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
