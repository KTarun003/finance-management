import React, {Component} from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className="searchBar">
				<input type="text" id="searchInput" placeholder="Enter Name To Search"/>
			</div>
		);
	}
}

export default SearchBar;