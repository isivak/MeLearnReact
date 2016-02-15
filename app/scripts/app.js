/** @jsx React.DOM */
'use strict';
define([], function () {
	return React.createClass({
		getInitialState: function() {
			return {message: 'Hello World!', test: 'are you here'};
		},
		goodbye: function(event) {
			this.setState({message: 'Goodbye World.'});
		},
		render: function() {
			return (
				React.DOM.div(
					null, 
					React.DOM.h1( null, "Text1"),
					React.DOM.h2( null, this.state.message)
				)
			);
		}
	});
});
