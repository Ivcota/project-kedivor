// Button.stories.js|jsx

import React from "react";
import Text from "./Text";
import { ComponentStory } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Typography/Text",
  component: Text,
};

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Text",
  mt: 10,
  mb: 0,
};
