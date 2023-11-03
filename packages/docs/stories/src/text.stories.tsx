import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@rck/theme";
import { Text } from "@rck/all/src";
import { faker } from "@faker-js/faker";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: faker.lorem.sentence(),
  },
};
