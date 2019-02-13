import { RSAA } from "redux-api-middleware";

import {
  REQ_GET_RANKS,
  REQ_GET_RANKS_FAILURE,
  REQ_GET_RANKS_SUCCESS,
} from "@/constants";

export const getRanks = () => {
  return {
    [RSAA]: {
      endpoint: "/api/ranks",
      method: "GET",
      types: [
        REQ_GET_RANKS,
        REQ_GET_RANKS_SUCCESS,
        REQ_GET_RANKS_FAILURE,
      ],
    },
  };
};
