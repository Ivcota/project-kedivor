// Button.stories.js|jsx

import React from "react";
import Title from "./Title";
import { ComponentStory } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Typography/Heading",
  component: Title,
};

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  size: "sm",
  color: "black",
  children: "Title",
};
