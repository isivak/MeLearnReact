/** @jsx React.DOM */
'use strict';
define([], function () {
	return React.createClass({
		getInitialState: function() {
			return {message: 'Hello World!', message1: 'Hell or World!'};
		},
		goodbye: function(event) {
			this.setState({message: 'Goodbye World.'});
		},
		render: function() {
			return (
				<div>
					<h2>{this.state.message}</h2>
					<h1 class='asd'>{this.state.message1}</h1>
				</div>
			);
		}
	});
});
