import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./Button";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import "../../App.css";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      defaultValue: "base",
      options: ["xs", "sm", "base", "lg", "xl"],
      control: { type: "radio" },
    },
    variant: {
      type: "string",
      defaultValue: "primary",
      options: ["primary", "secondary", "outline", "text", "light", "dark"],
      control: { type: "radio" },
    },
    onClick: action("clicked"),
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "button",
  text: "Button",
  variant: "primary",
  size: "lg",
};

export const Size = {
  render: (args: ButtonProps) => (
    <div className="flex justify-between items-start gap-8 p-2 m-auto">
      <div className="flex flex-col">
        <label className="text-center text-black mb-2">XS</label>
        <Primary variant="primary" size="xs" text="Button" />
      </div>
      <div className="flex flex-col">
        <label className="text-center text-black mb-2">SM</label>
        <Primary variant="primary" size="sm" text="Button" />
      </div>
      <div className="flex flex-col">
        <label className="text-center text-black mb-2">BASE</label>
        <Primary variant="primary" size="base" text="Button" />
      </div>
      <div className="flex flex-col">
        <label className="text-center text-black mb-2">LG</label>
        <Primary variant="primary" size="lg" text="Button" />
      </div>
      <div className="flex flex-col">
        <label className="text-center text-black mb-2">XL</label>
        <Primary variant="primary" size="xl" text="Button" />
      </div>
    </div>
  ),
};

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  text: "Button",
  variant: "primary",
  size: "lg",
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: true,
  type: "button",
  text: "Secondary Button",
  variant: "secondary",
  size: "lg",
};

export const Light = Template.bind({});
Light.args = {
  type: "button",
  text: "Light",
  variant: "light",
  size: "lg",
};

export const Dark = Template.bind({});
Dark.args = {
  type: "button",
  text: "Dark",
  variant: "dark",
  size: "lg",
};

export const Text = Template.bind({});
Text.args = {
  type: "button",
  text: "Text Button",
  variant: "text",
  size: "lg",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "button",
  text: "Outline Button",
  variant: "outline",
  size: "lg",
};
