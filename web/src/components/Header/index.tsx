import "./index.scss";

import React from "react";

import HeaderFilter from "@/components/HeaderFilter";
import HeaderTitle from "@/components/HeaderTitle";

interface HeaderProps {
  filter: string;
}

const Header = ({ filter }: HeaderProps) => (
  <header>
    <HeaderTitle title="오늘 뭐 입지?" />
    <HeaderFilter filter={filter} />
  </header>
);

export default Header;
