import { render, fireEvent, screen } from "@testing-library/react";
import { Input as TextInput } from "../";

describe("<TextInput />", () => {
  it("TextInput is being rendered", () => {
    render(<TextInput />);
    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toBeVisible();
  });
  it("is it possible to type in the input", () => {
    render(<TextInput />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    const inputValue = "test";

    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement.value).toBe(inputValue);
  });
});
