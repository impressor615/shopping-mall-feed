import { combineReducers } from "redux";

import commonUI from "./commonUI";
import product from "./product";
import rank from "./rank";

export default combineReducers({
  commonUI,
  product,
  rank,
});
