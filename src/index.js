import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, index, Link, Switch } from 'react-router-dom';

import App from './components/App';
import './index.css';

// ========================================


const root = document.getElementById('root'); 
ReactDOM.render(
	<Router>
		<App />
	</Router>,
root);