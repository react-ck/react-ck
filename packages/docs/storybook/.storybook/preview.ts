import { Preview } from "@storybook/react";
import { defaultTheme } from "@rck/theme/src";

const preview: Preview = {
  argTypes: {
    children: {
      description: "Content Slot",
      control: false,
    },
    header: {
      control: false,
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: defaultTheme.color["neutral-0"],
        },
        {
          name: "medium",
          value: "#808080",
        },
        {
          name: "dark",
          value: defaultTheme.color["neutral-900"],
        },
      ],
    },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
