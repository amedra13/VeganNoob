import React from 'react';
import GroupIcon from '@material-ui/icons/Group';
import TimerIcon from '@material-ui/icons/Timer';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';

const RecipeHeader = () => {
	return (
		<div className="recipeHeader">
			<div className="recipeHeader__title">
				<h3>Asian Food</h3>
				<h1>Vegan Dumplings</h1>
			</div>
			<div className="recipeHeader__prep">
				<div>
					<GroupIcon />
					<p>Serves: 3-5 people</p>
				</div>
				<div>
					<TimerIcon />
					<p>Cook Time: 120 minutes</p>
				</div>
				<div>
					<SignalWifi4BarIcon />
					<p>Difficulty: Intermediate</p>
				</div>
			</div>
		</div>
	);
};

export default RecipeHeader;
