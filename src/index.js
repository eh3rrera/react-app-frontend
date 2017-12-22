import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';


import './style/style.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';



const configureStore = initialState => {
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    );
};

const store = configureStore();



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
