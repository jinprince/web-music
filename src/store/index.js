import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
//二个参数，一个
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;