import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim()) {
      addTodo(text.trim());
    }

    setText("");
  };

  const handleType = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form id="todoInput" onSubmit={handleSubmit}>
        <InputBox onType={handleType} text={text} />
        <SubmitButton />
      </form>
    </div>
  );
};

const InputBox = ({ onType, text }) => {
  return (
    <input
      type="text"
      placeholdear="할 일을 입력해주세요."
      id="input-box"
      onChange={onType}
      value={text}
    />
  );
};

const SubmitButton = () => {
  return (
    <button type="submit" id="submit-button">
      등록
    </button>
  );
};

export default TodoInput;
