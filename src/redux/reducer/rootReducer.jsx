import toggleReducer from "./ToggleMenu";
import userReducer from "./userReducer";
import ticketReducer from "./ticketReducer";
import { combineReducers } from "redux";

export default combineReducers({
  toggleMenu: toggleReducer,
  user: userReducer,
  ticket: ticketReducer,
});
