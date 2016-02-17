var React = require("react");

var Option = React.createClass ({
	render: function() {
		return <option>{this.props.value}</option>
	}
});

var StoreWorkout = React.createClass ({
	_mockWorkouts: [
		{
			"name": "Murph",
			"type": "fortime",
			"description": "Run 1 mile \n 100 pull-ups \n 100 push-ups \n 300 squats \n Run 1 mile"
		},
		{
			"name": "Tabata Something Else",
			"type": "reps",
			"description": "4 x 20 seconds on 10 seconds off for 4 minutes \n pull-ups, push-ups, sit-ups, motherfaka"
		}
	],

	render: function() {
		var opts = [];
		for (var i =0; i < this._mockWorkouts.length; i++) {
			opts.push(<Option value={this._mockWorkouts[i].name} />);
		}
		return (
			<div id="logWorkout">
				<h2>Record Workout</h2>
				<label htmlFor="chooseWorkout">Workout:</label>
				<select name="" id="chooseWorkout">
					{opts}
				</select>
				<label htmlFor="workoutResult">Result:</label>
				<input id="workoutResult" />
				<input id="workoutDate" type="date" />
				<label htmlFor="notes">Notes:</label>
				<textarea id="notes"></textarea>
				<button>Store</button>
			</div>
		)
	},

	_Store: function() {
		// log to database
	}
});

module.exports = StoreWorkout;