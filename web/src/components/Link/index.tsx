import "./index.scss";

import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to: string;
  active?: boolean;
  [rest: string]: any;
}

const MyLink = ({ children, to, active, ...rest }: ButtonProps) => (
  <Link
    to={to}
    className={classnames("link", { active })}
    {...rest}
  >
    { children }
  </Link>
);

export default MyLink;
