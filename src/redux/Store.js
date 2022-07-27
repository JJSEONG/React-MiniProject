import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import selecthing from "./modules/selecthing"
import reduxsignup from "./modules/reduxsignup"
import detail from "./modules/detail"

const middlewares = [thunk];
const rootReducer = combineReducers({selecthing, reduxsignup, detail});
const enhancer = applyMiddleware(...middlewares)

const Store = createStore(rootReducer, enhancer);

export default Store;