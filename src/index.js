import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


import {
    BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
        <Router>
            <App />
        </Router>,
    document.getElementById('root')
);
