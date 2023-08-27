import { render, screen } from "@testing-library/react";
import Error from ".";

describe("<Error />", () => {
  test("Error is being rendered", () => {
    const mensagem = "Erro de teste";
    render(<Error mensagem={mensagem} />);

    const component = screen.getByRole("ErrorMessage");
    expect(component).toBeVisible();
  });
});
