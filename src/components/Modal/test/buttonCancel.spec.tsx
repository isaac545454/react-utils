import { render, screen } from "@testing-library/react";
import { ButtonCancel } from "../components/buttonCancel";

describe("<ButtonCancel />", () => {
  it("ButtonCancel is being rendered", () => {
    render(<ButtonCancel onChangeModal={() => {}} />);
    const component = screen.getByText("CANCELAR");

    expect(component).toBeVisible();
  });
});
