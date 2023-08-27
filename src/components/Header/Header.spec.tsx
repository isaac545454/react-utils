import { render, screen } from "@testing-library/react";
import Header from ".";

describe("test", () =>
  test("test2", () => {
    render(<Header />);
    const component = screen.getByRole("banner");
    expect(component).toBeVisible();
  }));
