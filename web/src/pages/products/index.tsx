import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getProducts, setLoading } from "@/actions";
import Container from "@/components/Container";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";

interface PageProps extends ReduxRouterProps, ProductState {}
class Page extends React.PureComponent<PageProps, {}> {
  public onFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const { name }: any = e.target;
    if (name === "products") return;
    const { history } = this.props;
    history.push("/ranks");
  }

  public async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setLoading(true));
    await dispatch(getProducts());
    dispatch(setLoading(false));
  }

  public render() {
    const { data } = this.props;
    return (
      <Container>
        <Header onClick={this.onFilterClick} filter="products" />
        <ProductsGrid data={data} />
      </Container>
    );
  }
}
const mapStateToProps = (state: StoreState) => ({
  ...state.product,
});

export default withRouter(connect(mapStateToProps)(Page) as any);
