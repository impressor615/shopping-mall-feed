import "./index.scss";

import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";

const Loading = ({ loading }: { loading: boolean; }) => (
  <div className={classnames("loading", { active: loading })}>
    <span>Loading....</span>
  </div>
);

const mapStateToProps = (state: StoreState) => ({
  ...state.commonUI,
});

export const PureLoading = Loading;
export default connect(mapStateToProps)(Loading);
