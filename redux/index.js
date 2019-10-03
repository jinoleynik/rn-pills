import { combineReducers } from "redux";
import pills from "./pills";
import user from "./user";

export default combineReducers({
    pills,
    user
});