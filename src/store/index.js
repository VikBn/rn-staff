import { createStore, combineReducers } from 'redux';
import { clientReducer } from "./reducers/clientReducer";

const rootReducer = () => combineReducers({
    client: clientReducer
});

export default createStore(rootReducer());