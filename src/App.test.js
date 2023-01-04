import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(2 + 2).toBe(4);
});
