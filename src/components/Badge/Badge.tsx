import * as React from "react";
import { ReactNode, useState } from "react";
import cn from "classnames";

export interface BadgeProps {
  text: ReactNode;
  color: string;
  isIconStart?: boolean;
  isDismiss?: boolean;
  variant: string;
}

const Badge = ({
  text,
  color,
  isDismiss,
  variant,
  isIconStart,
}: BadgeProps) => {
  const [showBadge, setShowBadge] = useState(true);

  const containerStyle = cn(
    `${color === "dark" ? "bg-gray-700" : `bg-${color}-100`}`,
    `rounded-${variant}`,
    `w-max flex justify-center items-center rounded-md gap-2 px-2.5 py-0.5`
  );

  const textStyle = cn(`text-${color}-700`, `font-bold`);

  const startCircleStyle = cn(
    "rounded-xl w-2 h-2",
    `${color === "dark" ? "bg-gray-100" : `bg-${color}-500`}`
  );

  return (
    <>
      {showBadge && (
        <div className={containerStyle}>
          {isIconStart && <div className={startCircleStyle}></div>}
          <p className={textStyle}>{text}</p>
          {isDismiss && (
            <div
              className={`text-${color}-400`}
              onClick={() => setShowBadge(false)}
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Badge;
