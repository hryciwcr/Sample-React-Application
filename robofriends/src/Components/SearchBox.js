import React from 'react';
import './SearchBox.css';

function SearchBox({ searchfield, searchChange }) {
	return (
		<div className="SearchBox">
			<input 
				className="input ba"
				type="search" 
				placeholder="search robots"
				onChange={searchChange} // when the onchange event is triggered, call the function that has been passed as searchange
			/>
		</div>
	);
}
export default SearchBox;