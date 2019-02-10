import React from "react";
import { withRouter } from "react-router-dom";

import Container from "@/components/Container";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import PRODUCTS from "@/data/products.json";

class Page extends React.PureComponent<RouterProps, {}> {
  public onFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const { name }: any = e.target;
    if (name === "products") return;
    const { history } = this.props;
    history.push("/ranks");
  }

  public render() {
    const { data } = PRODUCTS;
    return (
      <Container>
        <Header onClick={this.onFilterClick} filter="products" />
        <ProductsGrid data={data} />
      </Container>
    );
  }
}

export default withRouter(Page as any);
