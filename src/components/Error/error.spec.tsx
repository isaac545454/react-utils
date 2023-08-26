import { render, screen } from "@testing-library/react";
import Error from ".";

describe("test", () => {
  test("renders button with correct label", () => {
    const mensagem = "Erro de teste";
    render(<Error mensagem={mensagem} />);

    const component = screen.getByRole("ErrorMessage");
    expect(component).toBeVisible();
  });
});
