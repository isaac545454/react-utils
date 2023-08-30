import { render, screen } from "@testing-library/react";
import Footer from "../";

describe("<Footer />", () =>
  it("footer is being rendered", () => {
    render(<Footer />);
    const component = screen.getByRole("contentinfo");
    expect(component).toBeVisible();
  }));
