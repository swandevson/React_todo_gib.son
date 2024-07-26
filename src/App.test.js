import { render, screen } from "@testing-library/react";
import App from "./App"; // Import the App component

test("App component renders all subcomponents", () => {
  render(<App />);

  // Add more assertions for other subcomponents here
});
