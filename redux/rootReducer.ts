import { combineReducers } from "redux";
import { payoutReducer } from "./slices/payoutSlice";

const rootReducer = combineReducers({
  payout: payoutReducer,
});

export default rootReducer;
