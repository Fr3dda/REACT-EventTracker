import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
    events: eventsReducer,
    event: eventReducer
    
})