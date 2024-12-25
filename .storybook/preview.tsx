import "../dist/index.css";
import React from "react";

import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      document.body.classList.add("dark");

      return (
        // <div
        //   className="dark story-body-wrapper"
        //   style={{ padding: "16px 144px" }}
        // >
        <Story />
        // </div>
      );
    },
  ],
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
