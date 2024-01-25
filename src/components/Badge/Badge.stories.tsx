import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      type: "string",
      defaultValue: "gray",
      options: [
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
        "dark",
        "orange",
      ],
      control: { type: "radio" },
    },
    variant: {
      type: "string",
      defaultValue: "md",
      options: ["none", "sm", "md", "xl"],
      control: { type: "radio" },
    },
    onChange: action("changed"),
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
  color: "gray",
  variant: "md",
  isIconStart: false,
};

export const Red = Template.bind({});
Red.args = {
  text: "Red",
  color: "red",
  variant: "md",
  isIconStart: false,
  isDismiss: true,
};

export const Yellow = Template.bind({});
Yellow.args = {
  text: "Yellow",
  color: "yellow",
  variant: "md",
  isIconStart: true,
};

export const Green = Template.bind({});
Green.args = {
  text: "Green",
  color: "green",
  variant: "md",
  isIconStart: false,
  isDismiss: true,
};
export const Blue = Template.bind({});
Blue.args = {
  text: "Blue",
  color: "blue",
  variant: "md",
  isIconStart: false,
};

export const Indigo = Template.bind({});
Indigo.args = {
  text: "Indigo",
  color: "indigo",
  variant: "md",
  isIconStart: true,
};

export const Purple = Template.bind({});
Purple.args = {
  text: "Purple",
  color: "purple",
  variant: "md",
  isIconStart: false,
  isDismiss: true,
};

export const Pink = Template.bind({});
Pink.args = {
  text: "Pink",
  color: "pink",
  variant: "md",
  isIconStart: false,
};

export const Dark = Template.bind({});
Dark.args = {
  text: "Dark",
  color: "dark",
  variant: "md",
  isIconStart: true,
  isDismiss: true,
};

export const Orange = Template.bind({});
Orange.args = {
  text: "Orange",
  color: "orange",
  variant: "md",
  isIconStart: true,
  isDismiss: true,
};
