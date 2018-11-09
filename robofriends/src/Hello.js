//import React, { Component } from 'react';
import React from 'react';
import './Hello.css';

// const Hello = (props) => {
// 	return (
//  			<div>
//  				<h1 className="hello">Hello World</h1>
//  				<p className="paragraph">Congrats, you are hacking together your first component in React</p>
//  				<p className="paragraph">{props.greeting}</p>
//  			</div>
//  		);
// }

function Hello(props) {
	return (
		<div>
			<h1 className="hello">Hello World</h1>
			<p className="paragraph">Congrats, you are hacking together your first component in React</p>
			<p className="paragraph">{props.greeting}</p>
		</div>
	);
}


// class Hello extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1 className="hello">Hello World</h1>
// 				<p className="paragraph">Congrats, you are hacking together your first component in React</p>
// 				<p className="paragraph">{this.props.greeting}</p>
// 			</div>
// 		);
// 	}
// }


export default Hello;//use "default" when you are just exporting one thing.
