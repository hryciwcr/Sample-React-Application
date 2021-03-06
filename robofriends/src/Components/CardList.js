import React from 'react';
//import { robots } from './robots';
import Card from './Card';

function CardList({ robots }) {
	var cardComponent = robots.map((currentRobot, index) => {
		return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email} />
	});
	return (
		 <div>
		 	{cardComponent};
{		 
//		  	<Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
//		  	<Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}/> 
//			<Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email}/>
//			<Card id={robots[3].id} name={robots[3].name} username={robots[3].username} email={robots[3].email}/>
}
		 </div>
	);
}

export default CardList;