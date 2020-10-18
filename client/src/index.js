import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App/index';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import 'react-notifications/lib/notifications.css';
import 'react-table/react-table.css';
import { combineReducers, createStore } from 'redux';
import userActionReducer from './store/reducers/userActionReducer';
import MessageChat from 'react-messenger-customer-chat';

const creducer = combineReducers({
    reducer,
    userDetails: userActionReducer
})

const store = (window.devToolsExtension
    ? window.devToolsExtension () (createStore)
    : createStore) (creducer);

    // const store = createStore(reducer);

const app = (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        <MessageChat
            pageId="406156429546294"
            appId="797442954129952"
        />
    </>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
