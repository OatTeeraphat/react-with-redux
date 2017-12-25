import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import configureStore from './store/configStore';

// create store
let store = configureStore()
// connect store to app
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
, document.getElementById('root'));