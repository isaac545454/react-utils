import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("test", () =>
  test("test2", () => {
    render(<Footer />);
    const component = screen.getByRole("contentinfo");
    expect(component).toBeVisible();
  }));
