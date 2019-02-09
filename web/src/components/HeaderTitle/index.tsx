import "./index.scss";

import React from "react";

interface HeaderTitleProps {
  title: string;
}

export const getToday = (): string => {
  const currentYear = new Date().getFullYear().toString().substr(-2);
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();
  return `${currentYear}. ${currentMonth}. ${currentDate}`;
};

const HeaderTitle = ({ title }: HeaderTitleProps) => (
  <h3 className="header-title">
    <span>{title}</span>
    <span>{getToday()}</span>
  </h3>
);

export default HeaderTitle;
