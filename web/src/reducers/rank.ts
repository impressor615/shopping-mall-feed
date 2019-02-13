import { REQ_GET_RANKS_SUCCESS } from "@/constants";

export const initialState: RankState = {
  data: [],
};

export default function(state: RankState = initialState, action: BaseAction) {
  switch (action.type) {
    case REQ_GET_RANKS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
