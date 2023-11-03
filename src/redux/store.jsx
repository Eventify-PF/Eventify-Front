import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import eventReducer from "./reducers/eventReducer";
import eventTypeReducer from "./reducers/eventTypeReducer";
import ticketReducer from "./reducers/ticketReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  eventReducer,
  eventTypeReducer,
  ticketReducer,
  userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
