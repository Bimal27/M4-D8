import { Component } from 'react'
import React from 'react'
import MovieSection from './MovieSection'
import Loading from './Loading'

export default class Home extends Component {
	state = {
		isLoaded: false,
		sections: [{
			title: "Mission Impossible",
			query: "mission",
			movies: []
		},{
			title: "Love & Romance",
			query: "love",
			movies: []
		},{
			title: "Robots!",
			query: "robot",
			movies: []
		}]
	}
	
	componentDidMount = async () => {
			let response = await fetch(`http://www.omdbapi.com/?apikey=80606595&s=${this.state.sections[0].query}`)
			let responseTwo = await fetch(`http://www.omdbapi.com/?apikey=80606595&s=${this.state.sections[1].query}`)
			let responseThree = await fetch(`http://www.omdbapi.com/?apikey=80606595&s=${this.state.sections[2].query}`)
			let data = await Promise.all([response, responseTwo, responseThree]).then(responses => {
				return Promise.all(responses.map(r => r.json()))
			})
			
			{/* this.state.sections.forEach(section => {
				let movieSection = {...this.state.sections}
				movieSection[section].movies = data[section]
				this.setState({
					isLoaded: true,
					section: movieSection
				})
			}) */}
			
			for (let section in this.state.sections){
				var movieSection = {...this.state.sections}
				movieSection[section].movies = data[section]
			}
			this.setState({
				isLoaded: true,
				sections: movieSection
			})
	}
	
	render() {
		{/* true === false ? console.log("True!") : console.log("False!") */}
		if (this.state.isLoaded === true){
			return (
				<>
					<MovieSection 
						sectionTitle={this.state.sections[0].title} 
						moviesFetch={this.state.sections[0].movies}
					/>
					<MovieSection 
						sectionTitle={this.state.sections[1].title} 
						moviesFetch={this.state.sections[1].movies}
					/>
					<MovieSection 
						sectionTitle={this.state.sections[2].title} 
						moviesFetch={this.state.sections[2].movies}
					/>
				</>
			)
		} else {
			return (
				<Loading />
			)
		}
	}
}