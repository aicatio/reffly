import { combineReducers } from "redux";

import {cookieReducer} from "./cookie"; 
import {shortenedReducer} from "./shortened"; 

const allReducers = {
	shortened: shortenedReducer, 
	cookie: cookieReducer, 
};

export const rootReducer = combineReducers(allReducers);
export default allReducers;
