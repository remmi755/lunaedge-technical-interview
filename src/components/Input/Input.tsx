import * as React from "react";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import cn from "classnames";
import { ReactNode } from "react";
import ToolTip from "../ToolTip/ToolTip";

export interface InputProps {
  name: string;
  toolTipInfo?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register: any;
  errors?: any;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  value?: any;
  styling?: string;
  disabled?: boolean;
}

const Input = ({
  label,
  toolTipInfo,
  placeholder,
  type,
  register,
  value,
  styling,
  iconStart,
  errors,
  name,
  iconEnd,
  disabled,
}: InputProps) => {
  const styleInformation = cn(
    "w-max",
    errors[name] && errors[name] ? "text-red-500" : "text-gray-500",
    styling === "validation" ? "text-red-500" : ""
  );

  const styleIconStart = cn(
    "absolute w-4 h-4 top-11 inset-y-3.5 start-2 mt-0.5",
    errors[name] && errors[name] ? "text-red-500" : "text-gray-500",
    styling === "validation" ? "text-red-500" : ""
  );

  return (
    <div>
      <div className="w-[400px] h-[100px] relative flex items-center justify-cente">
        <div className="absolute w-4 h-4 text-gray-500 inset-y-3.5">
          <div className="flex items-center gap-1 w-[200px] text-black">
            <h3 className="text-gray-500 font-bold">{label}</h3>
            <div className="text-gray-500">
              <ToolTip text={toolTipInfo}>
                <InformationCircleIcon width={14} />
              </ToolTip>
            </div>
          </div>
          <div className={styleIconStart}>{iconStart}</div>
          <div className="absolute w-4 h-4 top-11 left-96 -ml-3">{iconEnd}</div>
          {register && name && (
            <input
              {...register(`${name}`, {
                required: "Value is required",
                minLength: {
                  value: 2,
                  message: "MinLength 2 characters.",
                },
                maxLength: {
                  value: 12,
                  message: "MaxLength 12 characters.",
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "This input is character only.",
                },
              })}
              disabled={disabled}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              className={`input input-styling-${
                errors[name] && errors[name] ? "validation" : styling
              }`}
            />
          )}
          <p className={styleInformation}>
            {errors[name] ? errors[name].message : "Enter value"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
