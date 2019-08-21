import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Layout from './hoc/Layout/Layout';
import App from './App';

import * as serviceWorker from './serviceWorker';

const app = (
    <Layout>
        <App />
    </Layout>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
