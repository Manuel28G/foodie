import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reviewsReducer from "./reducers/reviews.reducer";

const RootReducer = combineReducers({ reviews: reviewsReducer });

export default createStore(RootReducer, applyMiddleware(thunk));
