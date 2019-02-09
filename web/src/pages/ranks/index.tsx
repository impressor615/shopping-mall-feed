import React from "react";
import { withRouter } from "react-router-dom";

import Container from "@/components/Container";
import Header from "@/components/Header";

class Page extends React.PureComponent<RouterProps, {}> {
  public onFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const { name }: any = e.target;
    if (name === "ranks") return;
    const { history } = this.props;
    history.push("/products");
  }

  public render() {
    return (
      <Container>
        <Header onClick={this.onFilterClick} filter="ranks" />
      </Container>
    );
  }
}

export default withRouter(Page as any);
