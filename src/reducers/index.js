import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  /// log --> the name we are giving to our state
  log: logReducer,
  tech: techReducer,
});
