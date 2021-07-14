import React, { Component } from 'react'

export default class MainHeader extends Component {
	render() {
		return (
			<h4 className="mx-3 my-4 main-header">{this.props.mainHeader}</h4>
		)
	}
}