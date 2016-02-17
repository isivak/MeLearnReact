var React = require("react");

var SignIn = React.createClass({
	render: function() {
		return (
			<div>
				<label htmlFor="username">username
					<input type="text" id="username">
				</label>
				<label htmlFor="password">password
					<input type="text" id="password">
				</label>
				<button id="SignIn" onClick={this.props.onAuthComplete.bind( null, this._doAuth )}>
					Sign in</button>
			</div>
		);
	},

	_doAuth: function() {
		return true;
	}
});

module.exports = SignIn;