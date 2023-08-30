import { Input } from "../";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {};

export const DateInput: Story = {
  args: {
    type: "date",
  },
};
