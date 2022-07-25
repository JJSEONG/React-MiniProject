import { legacy_createStore as createStore, combineReducers } from "redux";
import selecthing from "./modules/selecthing"
import reduxsignup from "./modules/reduxsignup"

const rootReducer = combineReducers({selecthing, reduxsignup});

const Store = createStore(rootReducer)

export default Store;