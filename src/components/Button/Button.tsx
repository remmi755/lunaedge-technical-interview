import * as React from "react";
import "../../App.css";
import cn from "classnames";

import IconStar from "../Icons/IconStar";
import ChevronDown from "../Icons/ChevronDown";
import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  text: ReactNode;
  variant: string;
  size: string;
  disabled?: boolean;
  onClick?: (() => void) | any;
}

const children = (text: ReactNode): ReactNode => {
  return (
    <div className={`flex justify-between items-center `}>
      <IconStar />
      <p className="px-1">{text}</p>
      <ChevronDown />
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  text,
  size,
  variant,
  onClick,
}) => {
  const btnClass = cn(`button px-2`, `button-${size} button-${variant}`);

  return (
    <button
      disabled={disabled}
      type={type}
      className={btnClass}
      onClick={onClick}
    >
      {children(text)}
    </button>
  );
};

export default Button;
