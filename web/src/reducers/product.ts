import { REQ_GET_PRODUCTS_SUCCESS } from "@/constants";

export const initialState: ProductState = {
  data: [],
};

export default function(state: ProductState = initialState, action: BaseAction) {
  switch (action.type) {
    case REQ_GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
