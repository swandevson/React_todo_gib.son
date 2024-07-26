import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

const todos = new Map([
  [1, { text: "todo 1", isCompleted: true }],
  [2, { text: "todo 2", isCompleted: true }],
  [3, { text: "todo 3", isCompleted: false }],
  [4, { text: "todo 4", isCompleted: false }],
  [5, { text: "todo 5", isCompleted: true }],
  [6, { text: "todo 6", isCompleted: false }],
  [7, { text: "todo 7", isCompleted: true }],
]);

test("renders the correct number of todo items", () => {
  render(<TodoList todos={todos} onDelete={jest.fn()} onEdit={jest.fn()} />);

  const todoItems = screen.getAllByRole("listitem");

  expect(todoItems.length).toBe(todos.size);
});
