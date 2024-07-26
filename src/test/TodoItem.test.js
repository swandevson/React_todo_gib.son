import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../components/TodoItem";

// 래퍼 컴포넌트를 사용하여 상태 관리를 추가

test("할 일 체크에 따른 상태 변경 테스트", async () => {
  const todoText = "오늘의 할일";
  // Render the TodoItem component
  await render(
    <TodoItem
      id={1}
      text={todoText}
      isCompleted={false}
      onDelete={jest.fn()}
      onEdit={jest.fn()}
    />
  );

  const checkbox = screen.getByRole("checkbox");
  const textElement = screen.getByText(todoText);

  // 빈 체크 상자 클릭하여 상태 변경
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  expect(textElement).toHaveStyle({ "text-decoration": "line-through" });
  expect(textElement).toHaveStyle({ color: "gray" });

  // 체크된 체크 상자 클릭하여 상태 변경
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(false);
  expect(textElement).toHaveStyle({ "text-decoration": "none" });
  expect(textElement).toHaveStyle({ color: "black" });
});

test("할 일 수정 상태변경 테스트", async () => {
  const mockOnEdit = jest.fn();
  await render(
    <TodoItem
      id={1}
      text="Test Todo"
      isCompleted={false}
      onDelete={jest.fn()}
      onEdit={mockOnEdit}
    />
  );

  // 수정 버튼 클릭 전 상태 확인
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
  expect(screen.queryByRole("textbox")).not.toBeInTheDocument();

  // 수정 버튼 클릭
  fireEvent.click(screen.getByText("✏️"));

  // 수정 버튼 클릭 후 상태 확인
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("textbox").value).toBe("Test Todo");
  expect(screen.queryByText("Test Todo")).not.toBeInTheDocument();

  // 텍스트 입력 필드에 새로운 값 입력
  userEvent.clear(screen.queryByRole("textbox"));
  userEvent.type(screen.getByRole("textbox"), "Updated Todo");

  // 저장 버튼 클릭
  fireEvent.click(screen.getByText("💾"));

  // 수정된 텍스트에 대한 callback 확인
  expect(mockOnEdit).toHaveBeenCalledWith(1, "Updated Todo", false);

  // 이전 상태로 돌아갔는지 확인
  expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
});

test("할 일 삭제 호출 테스트", async () => {
  const mockOnDelete = jest.fn();
  await render(
    <TodoItem
      id={1}
      text="Test Todo"
      isCompleted={false}
      onDelete={mockOnDelete}
      onEdit={jest.fn()}
    />
  );

  fireEvent.click(screen.getByText("🗑️"));
  expect(mockOnDelete).toHaveBeenCalledWith(1);
});
