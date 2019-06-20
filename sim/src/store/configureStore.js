import { createStore, combineReducers, applyMiddleware, compose} from 'react-redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import adminReducer from '../reducers/admin';
import jobReducer from '../reducers/job';
import materialsReducer from '../reducers/materials';
import partReducer from '../reducers/part';

//redux dev tools available if in development mode.
const composeEnhancers = process.env.NODE.ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ : null || compose;

export default () => {

    const store = createStore(
        combineReducers({
            admin: adminReducer,
            job: jobReducer,
            mat: materialsReducer,
            part: partReducer,
            auth: authReducer
        }),
      composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
