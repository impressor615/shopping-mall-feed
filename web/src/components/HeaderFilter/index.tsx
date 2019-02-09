import "./index.scss";

import React from "react";

import Button from "@/components/Button";

interface HeaderFilterProps {
  filter: string;
  onClick: (e: React.MouseEvent) => void;
}

const HeaderFilter = ({ filter, onClick }: HeaderFilterProps) => (
  <div className="header-filter" onClick={onClick}>
    <Button name="products" active={filter === "products"}>상품</Button>
    <Button name="ranks" active={filter === "ranks"}>랭킹</Button>
  </div>
);

export default HeaderFilter;
