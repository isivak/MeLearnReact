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
				React.DOM.div(null, 
					React.DOM.h2(null, this.state.message),
					React.DOM.h1( {class:"asd"}, this.state.message1)
				)
			);
		}
	});
});
