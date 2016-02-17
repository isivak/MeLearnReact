var React = require("react");

var CreateAccount = React.createClass({
	render: function() {
		return (
			<div>
				<label htmlFor="username">username
					<input type="text" id="username">
				</label>
				<label htmlFor="password">password
					<input type="text" id="password">
				</label>
				<label htmlFor="password">confirm password 
					<input type="text" id="password">
				</label>
				<button id="signin" onClick={this.props.onAuthComplete.bind( null, this._createAccount )}>
					Create Account</button>
			</div>
		);
	},

	_createAccount: function() {
		// do create logic
		return true;
	}
});

module.exports = CreateAccount;