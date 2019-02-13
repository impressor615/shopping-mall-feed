import "./index.scss";

import React from "react";

import Link from "@/components/Link";

interface HeaderFilterProps {
  filter: string;
}

const HeaderFilter = ({ filter }: HeaderFilterProps) => (
  <div className="header-filter">
    <Link to="/products" active={filter === "products"}>상품</Link>
    <Link to="/ranks" active={filter === "ranks"}>랭킹</Link>
  </div>
);

export default HeaderFilter;
