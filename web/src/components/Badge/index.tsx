import "./index.scss";

import classnames from "classnames";
import React from "react";

interface BadgeProps {
  rank: number;
}

const Badge = ({ rank }: BadgeProps) => (
  <span className={classnames(
    "badge",
    { "badge-gold": rank === 1 },
    { "badge-silver": rank === 2 },
    { "badge-bronze": rank === 3 },
  )}>
    { rank }
  </span>
);

export default Badge;
