import React from "react";

import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import { ThemeProvider } from "styled-components";
import theme from "../src/config/theme";
import Global from "../src/shared/Global";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(
  StoryRouter({
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  }),
);
