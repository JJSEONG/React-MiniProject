import { legacy_createStore as createStore, combineReducers } from "redux";
import selecthing from "./modules/selecthing"

const rootReducer = combineReducers({ selecthing });

const Store = createStore(rootReducer)

export default Store;