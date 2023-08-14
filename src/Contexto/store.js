import { legacy_createStore as createStore, combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import autenticacionReducer from './Reducers/autenticacionReducer';
import etiquetasIdiomaReducer from './Reducers/etiquetasIdiomaReducer';

const reducers = {
    autReducer: autenticacionReducer,
    langReducer: etiquetasIdiomaReducer,
    toastr: toastrReducer
};

const reducer = combineReducers(reducers);
export const store = createStore(reducer);