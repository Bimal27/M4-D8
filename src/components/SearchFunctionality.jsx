import React, { Component } from 'react'

class SearchFunctionality extends Component {
	state = {
		isLoaded: false,
		search:null
	}
	
	componentDidMount = async () => {
		let searchQuery = "Water"
		const data = await fetch(`http://www.omdbapi.com/?apikey=80606595&s=${searchQuery}`)
		const parsedData = await data.json()
		console.log("PARSED DATA", parsedData.Search)
		this.setState({
			isLoaded: true,
			search: parsedData.Search
		})
	}

	render() {
		{console.log(this.state)}
		return (
			<div>Search!</div>
		)
	}
}

export default SearchFunctionality