import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './styles.scss';
import store from './store';
import App from './components/App';

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <App/>
        </Provider>
    </Fragment>,
    document.getElementById('root'));