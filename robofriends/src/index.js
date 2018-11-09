import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App.js';
//import CardList from './Components/CardList.js';
//import Hello from './Hello.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import { robots } from './Components/robots.js';//have to use the {} brackets for destructuring because the export is not export default and therefor you could be passing several objects from this file 

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<h1>HelloWorld</h1>, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
//ReactDOM.render(<Hello greeting={'Hello React Ninja'}/>, document.getElementById('test'));
ReactDOM.render(
	<App />,
	document.getElementById("test"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
