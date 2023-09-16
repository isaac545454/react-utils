import { Text } from "..";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Text,
} as Meta;

type Story = StoryObj<typeof Text>;

export const TextInput: Story = {};

export const DateInput: Story = {
  args: {
    type: "date",
  },
};
