import {Error} from "../";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Error",
  component: Error,
} as Meta;

type Story = StoryObj<typeof Error>;

export const ErrorMessage: Story = {
  args: { mensagem: "Mensagem" },
};
