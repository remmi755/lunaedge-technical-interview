import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import Input, { InputProps } from "./Input";
import { EyeIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useForm } from "react-hook-form";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    styling: {
      type: "string",
      defaultValue: "default",
      options: [
        "default",
        "hover",
        "focus",
        "filled",
        "validation",
        "disabled",
      ],
      control: { type: "radio" },
    },
    onChange: action("changed"),
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
  const methods = useForm();
  const { register } = methods;
  return <Input {...args} register={register} />;
};

export const Default = Template.bind({});
Default.args = {
  errors: error,
  disabled: false,
  name: "default",
  label: "Label",
  placeholder: "Placeholder",
  styling: "default",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Hover = Template.bind({});
Hover.args = {
  errors: error,
  disabled: false,
  name: "hover",
  label: "Label",
  placeholder: "Placeholder",
  styling: "hover",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Focus = Template.bind({});
Focus.args = {
  errors: error,
  disabled: false,
  name: "focus",
  label: "Label",
  placeholder: "Placeholder",
  styling: "focus",
  value: "Value",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Filled = Template.bind({});
Filled.args = {
  errors: error,
  disabled: false,
  name: "filled",
  label: "Label",
  placeholder: "Placeholder",
  styling: "default",
  value: "Filled",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Validation = Template.bind({});
Validation.args = {
  errors: error,
  disabled: false,
  name: "validation",
  label: "Label",
  placeholder: "Placeholder",
  styling: "validation",
  value: "Validation",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  errors: error,
  name: "disabled",
  label: "Label",
  placeholder: "Placeholder",
  styling: "disabled",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};
