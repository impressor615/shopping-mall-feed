import "./index.scss";

import React from "react";

import HeaderFilter from "@/components/HeaderFilter";
import HeaderTitle from "@/components/HeaderTitle";

interface HeaderProps {
  filter: string;
  onClick: () => void;
}

const Header = ({ filter, onClick }: HeaderProps) => (
  <header>
    <HeaderTitle title="오늘 뭐 입지?" />
    <HeaderFilter filter={filter} onClick={onClick} />
  </header>
);

export default Header;
