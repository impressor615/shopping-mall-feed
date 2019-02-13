import { applyMiddleware, createStore } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from "@/reducers";

const middlewares = [thunk, apiMiddleware, logger];
export default () => createStore(reducers, {}, applyMiddleware(...middlewares));
