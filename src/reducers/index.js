import { combineReducers } from "redux";
import cart from "./cart.js";
import inventory from "./inventory.js";

export default combineReducers({ inventory, cart });
