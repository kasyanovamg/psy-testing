import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { commonReducer } from '../reducers/index';

const configureStore = (initialState) => {
    return createStore(
        commonReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    );
}

export default configureStore;