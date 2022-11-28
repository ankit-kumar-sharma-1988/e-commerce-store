import { combineReducers } from "redux";
import { cartReducer } from "./Reducer";
// import { quantityReducer } from "./Reducer";

const rootReducer = combineReducers({cartReducer});
export default rootReducer;