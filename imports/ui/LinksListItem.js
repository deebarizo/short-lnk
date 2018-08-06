import React from 'react';

export default class LinksListItem extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.url}</p>
				<p>{this.props.shortUrl}</p>
			</div>
		);
	}
}