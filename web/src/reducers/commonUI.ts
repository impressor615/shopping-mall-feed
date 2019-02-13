import { SET_LOADING } from "@/constants";

export const initialState: CommonUIState = {
  loading: false,
};

export default function(state: CommonUIState = initialState, action: BaseAction) {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: action.payload,
      };

    default:
      return state;
  }
}
