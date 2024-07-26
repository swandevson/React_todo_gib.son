import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../components/TodoForm";

test("할 일 추가", async () => {
  const mockAddTodo = jest.fn();

  render(<TodoForm addTodo={mockAddTodo} />);

  const textbox = screen.getByRole("textbox");

  userEvent.type(textbox, "Todo");
  fireEvent.click(screen.getByRole("button"));

  expect(mockAddTodo).toHaveBeenCalledWith("Todo");
});

test("앞 뒤에 불필요한 공백이 있는 할 일 추가", async () => {
  const mockAddTodo = jest.fn();

  render(<TodoForm addTodo={mockAddTodo} />);

  const textbox = screen.getByRole("textbox");

  userEvent.type(textbox, "    Todo    ");
  fireEvent.click(screen.getByRole("button"));

  expect(mockAddTodo).toHaveBeenCalledWith("Todo");
});

test("공백만 입력 될 시의 할 일 추가 시 예외처리", async () => {
  const mockAddTodo = jest.fn();

  render(<TodoForm addTodo={mockAddTodo} />);

  const textbox = screen.getByRole("textbox");

  userEvent.type(textbox, "          ");
  fireEvent.click(screen.getByRole("button"));

  expect(mockAddTodo).not.toHaveBeenCalled();
});

test("아무것도 입력되지 않았을 때의 할 일 추가 시 예외처리", async () => {
  const mockAddTodo = jest.fn();

  render(<TodoForm addTodo={mockAddTodo} />);

  fireEvent.click(screen.getByRole("button"));

  expect(mockAddTodo).not.toHaveBeenCalled();
});
