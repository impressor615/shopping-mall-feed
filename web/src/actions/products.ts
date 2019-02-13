import { RSAA } from "redux-api-middleware";

import {
  REQ_GET_PRODUCTS,
  REQ_GET_PRODUCTS_FAILURE,
  REQ_GET_PRODUCTS_SUCCESS,
} from "@/constants";

export const getProducts = () => {
  return {
    [RSAA]: {
      endpoint: "/api/products",
      method: "GET",
      types: [
        REQ_GET_PRODUCTS,
        REQ_GET_PRODUCTS_SUCCESS,
        REQ_GET_PRODUCTS_FAILURE,
      ],
    },
  };
};
