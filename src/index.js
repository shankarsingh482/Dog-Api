import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./reducer/index";
import { watcherSaga } from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));
                registerServiceWorker();
