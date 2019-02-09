import "./index.scss";

import classnames from "classnames";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: ()  => void;
  active?: boolean;
  [rest: string]: any;
}

const Button = ({ children, onClick, active, ...rest }: ButtonProps) => (
  <button
    className={classnames("btn", { active })}
    onClick={onClick}
    {...rest}
  >
    { children }
  </button>
);

export default Button;
