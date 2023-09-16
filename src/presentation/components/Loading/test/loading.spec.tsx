import { render, screen } from "@testing-library/react";
import Loading from "../";

describe("<Loading />", () => {
  it("Loading is being rendered", () => {
    render(<Loading />);

    const component = screen.getByText("Loading");
    expect(component).toBeVisible();
  });
});
