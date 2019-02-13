import { SET_LOADING } from "@/constants";

export const setLoading = (loading: boolean): BaseAction => (
  {
    payload: loading,
    type: SET_LOADING,
  }
);
