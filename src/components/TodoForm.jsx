import React, { useState } from "react";
import styled from "styled-components";

const TodoFormContainer = styled.div`
  background: #495057;
  font-size: 1.4rem;
`;

const TodoForm = styled.form`
  display: flex;
  width: 100%;
`;

const InputBox = styled.input`
  flex: 1 1 90%;
  font-size: 1.15rem;
  padding: 15px;
  border: none;
  background: #495057;
  color: white; /* Change the text color to white */
  box-sizing: border-box;
  &::placeholder {
    color: #dee2e6;
  }
`;

const SubmitButton = styled.button`
  flex: 1 1 10%;
  padding: 10px;
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
`;

const SubmitButtonText = styled.h3`
  margin: 0px;
  padding: 0px;
`;

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() || text == null) {
      addTodo(text.trim()); // 입력받은 내용으로 todo 추가
    }

    setText("");
  };

  const handleType = (event) => {
    setText(event.target.value);
  };

  return (
    <TodoFormContainer>
      <TodoForm id="todo-form" onSubmit={handleSubmit}>
        <InputBox
          type="text"
          placeholder="할 일을 입력해주세요."
          id="input-box"
          onChange={handleType}
          value={text}
          required={true}
        />
        <SubmitButton type="submit" id="submit-button">
          <SubmitButtonText>➕</SubmitButtonText>
        </SubmitButton>
      </TodoForm>
    </TodoFormContainer>
  );
};

export default TodoInput;
