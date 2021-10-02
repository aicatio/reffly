import { combineReducers } from "redux";

import {cookieReducer} from "./cookie"; 
import {shortenedReducer} from "./shortened"; 

export default combineReducers({
	shortened: shortenedReducer, 
	cookie: cookieReducer, 
});
