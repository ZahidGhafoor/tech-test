import http from "./http.service";
import Promisable from "./promisable.service";
import { payoutActions } from "@/redux/slices/payoutSlice";

const url = "/analytics/tech-test";

const PayoutService = {
  getPayouts: async (dispatch: any, page: any) => {
    dispatch?.(payoutActions.setLoading(true));

    const [success, error]: any = await Promisable.asPromise(
      http.get(`${url}/payouts?page=${page}&limit=10`)
    );

    if (success) {
      const { data, metadata } = success.data;
      dispatch?.(payoutActions.setPayouts(data));
      dispatch?.(payoutActions.setTotalCount(metadata.totalCount));
      dispatch?.(payoutActions.setLoading(false));
    }

    dispatch?.(payoutActions.setLoading(false));
    return [success, error];
  },
  getSearchedPayouts: async (dispatch: any, query: any) => {
    dispatch?.(payoutActions.setLoading(true));

    const [success, error]: any = await Promisable.asPromise(
      http.get(`${url}/search`, {
        params: {
          query: encodeURIComponent(query),
        },
      })
    );
    if (success) {
      const data = success.data;
      console.log("search", data);
      dispatch?.(payoutActions.setPayouts(data));
      dispatch?.(payoutActions.setLoading(false));
    }

    dispatch?.(payoutActions.setLoading(false));
    return [success, error];
  },
};

export default PayoutService;
