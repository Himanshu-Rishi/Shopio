import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryDetailReducer, productDetailReducer, productsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
