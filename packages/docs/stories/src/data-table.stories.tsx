import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@rck/theme";
import { faker } from "@faker-js/faker";
import { Chip } from "@rck/chip/src";
import { configureStory } from "@rck/story-config";
import readme from "@rck/data-table/README.md";
import { DataTable } from "@rck/data-table/src";

type Story = StoryObj<typeof DataTable>;

const meta: Meta<typeof DataTable> = {
  title: "Generic/DataTable",
  ...configureStory(
    DataTable,
    {
      decorators: [
        (Story) => (
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        ),
      ],
    },
    {
      readme,
    },
  ),
};

export default meta;

const col1 = faker.lorem.word();
const col2 = faker.lorem.word();
const col3 = faker.lorem.word();

export const Component: Story = {
  args: {
    skin: "bordered",
    headers: { [col1]: faker.lorem.word(), [col2]: faker.lorem.word(), [col3]: faker.lorem.word() },
    data: Object.keys(Array.from(Array.from({ length: 10 }))).map(() => ({
      [col1]: faker.date.future().toLocaleDateString(),
      [col2]: faker.company.buzzNoun(),
      [col3]: <Chip>{faker.commerce.price()}</Chip>,
    })),
  },
};
