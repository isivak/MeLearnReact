var React = require("react");
var Authentication = require("./auth.jsx");
var WorkoutLog = require("./workoutlog.jsx");

var App = React.createClass ({
	getInitialState: function() {
		return { signedIn: false };
	},

	render: function() {
		return React.createElement(
			"div",
      		null,
				"{ this.state.signedIn ? <WorkoutLog onLogout={this._onLogout} /> :
				<Authentication onAuthComplete={this._onAuthComplete} />}"
	    );
	},

	_onAuthComplete: function( result ) {
		if (result()) {
			this.setState( { signedIn: true });
		}
	},

	_onLogout: function() {
		this.setState( { signedIn: false });
	}
});

React.render( <App />, document.getElementById("container"));