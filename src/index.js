import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createScore} from 'redux';
import {Provider} from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

// Store
const store = createScore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
                <Provider store ={store}>
                    <App />
                </Provider>, rootElement);
