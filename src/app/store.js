import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../features/Auth/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    auth: authReducer
});

const store = createStore(rootReducers,
    composerEnhancer(applyMiddleware(thunk)));
export default store;
