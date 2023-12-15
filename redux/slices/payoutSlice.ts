import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface payoutState {
  loading: boolean;
  payouts: [];
  count: number;
  page: 1;
}

const initialState: payoutState = {
  loading: false,
  payouts: [],
  count: 0,
  page: 1,
};

export const payoutSlice = createSlice({
  name: "payout",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPayouts: (state, action) => {
      state.payouts = action.payload;
    },
    setTotalCount: (state, action) => {
      state.count = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const payoutReducer = payoutSlice.reducer;
export const payoutActions = payoutSlice.actions;
