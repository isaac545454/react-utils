import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { describe, test, expect } from "@jest/globals";
import Error from "./index";

describe("test", () => {
  test("renders button with correct label", () => {
    const mensagem = "Erro de teste";
    render(<Error mensagem={mensagem} />);

    const component = screen.getByRole("ErrorMessage");
    expect(component).toBeVisible();
  });
});
