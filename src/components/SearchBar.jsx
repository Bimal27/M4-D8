import React, { Component } from 'react'
import {InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import { BsSearch  } from "react-icons/bs";

class SearchBar extends Component {
	state = {
		isLoaded: false,
		search: null
	}
	
	submitSearch = async (search) => {
		search.preventDefault()
		console.log("Not Working!")
		console.log(search)
		console.log(search.target.value)
		{/* const data = await fetch(`http://www.omdbapi.com/?apikey=80606595&s=${search}`)
		const parsedData = await data.json()
		console.log("PARSED DATA", parsedData.Search)
		this.setState({
			isLoaded: true,
			search: parsedData.Search
		}) */}
	}
	
	render() {
		return (
			<form onSubmit={this.submitSearch}>
				<InputGroup className="mb-2">
					<InputGroup.Prepend>
						<Button type="submit" variant="dark">
							<BsSearch ></BsSearch>
						</Button>
					</InputGroup.Prepend>
					<FormControl id="inlineFormInputGroup" placeholder="Search..." />
				</InputGroup>
			</form>
		)
	}
	
}

export default SearchBar