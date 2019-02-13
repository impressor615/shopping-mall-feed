import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getRanks } from "@/actions";
import Container from "@/components/Container";
import Header from "@/components/Header";

import RankItems from "./RankItems";

interface PageProps extends ReduxRouterProps, RankState {}
class Page extends React.PureComponent<PageProps, {}> {
  public onFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const { name }: any = e.target;
    if (name === "ranks") return;
    const { history } = this.props;
    history.push("/products");
  }

  public async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getRanks());
  }

  public render() {
    const { data } = this.props;
    return (
      <Container>
        <Header onClick={this.onFilterClick} filter="ranks" />
        <RankItems data={data} />
      </Container>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  ...state.rank,
});
export default withRouter(connect(mapStateToProps)(Page) as any);
