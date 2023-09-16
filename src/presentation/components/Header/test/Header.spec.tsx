import { render, screen } from "@testing-library/react";
import Header from "../";

describe("<Header />", () =>
  it("header is being rendered", () => {
    render(<Header />);
    const component = screen.getByRole("banner");
    expect(component).toBeVisible();
  }));
