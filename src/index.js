import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.js';
import store from './store/';
import CssBaseline from '@material-ui/core/CssBaseline';


function Main() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    )
}

const rootEl = document.getElementById('root');
ReactDOM.render(<Main />, rootEl);