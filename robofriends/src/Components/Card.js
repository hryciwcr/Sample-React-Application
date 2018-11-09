//import React, {Component} from 'react';
import React from 'react';
import './Card.css';

function Card({name, email, id}) {
		return (
			<div className="card grow">
				<img alt='' src={`https://robohash.org/${name}?200x200`} />
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		);
}

// const Card = (props) => {
// 	return (
//		<div>
//			<img src=''>
//		</div>
// 	);
// }

// class Card extends Component {
// 	render() {
// 		return (

// 		);
// 	}
// }

export default Card