import RaissaCarousel from './RaissaCarousel'
import React, { Component } from 'react'

export default class MovieSection extends Component {
	render() {
		{console.log(this.props)}
		return (
			<div className="m-3">
				<h3 className="text-light mt-2 mb-2">{this.props.sectionTitle}</h3>
				<RaissaCarousel moviesArray={this.props.moviesFetch.Search}/>
			</div>
) } }


