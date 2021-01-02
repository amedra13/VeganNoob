import React from 'react';
import GroupIcon from '@material-ui/icons/Group';
import TimerIcon from '@material-ui/icons/Timer';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';

const RecipeHeader = ({ recipe }) => {
	return (
		<div className="recipeHeader">
			<div className="recipeHeader__title">
				<h3>{recipe?.type} Food</h3>
				<h1>{recipe?.name}</h1>
			</div>
			<div className="recipeHeader__prep">
				<div>
					<GroupIcon />
					<p>Serves: {recipe?.serves} people</p>
				</div>
				<div>
					<TimerIcon />
					<p>Cook Time: {recipe?.cookTime} minutes</p>
				</div>
				<div>
					<SignalWifi4BarIcon />
					<p>Difficulty: {recipe?.difficulty}</p>
				</div>
			</div>
		</div>
	);
};

export default RecipeHeader;
