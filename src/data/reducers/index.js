import { combineReducers } from "redux";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  rooms: roomReducer
});
export default rootReducer;
