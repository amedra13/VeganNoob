import React from 'react';
// import GroupIcon from '@material-ui/icons/Group';
// import TimerIcon from '@material-ui/icons/Timer';
// import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';

const RecipeHeader = ({ recipe }) => {
	return (
		<div className="recipeHeader">
			<div className="recipeHeader__title">
				<h1>{recipe?.name}</h1>
			</div>
			<div className="recipeHeader__intro">
				<div className="recipeHeader__info">
					<div className="timeInfo">
						<h3>Prep Time</h3>
						<p>20 min</p>
					</div>
					<div className="timeInfo">
						<h3>Cook Time</h3>
						<p>30 min</p>
					</div>
					<div className="timeInfo">
						<h3>Total Time</h3>
						<p>50 min</p>
					</div>
					<div className="headerInfo">
						<div>
							{/* <GroupIcon /> */}
							<h3>Serves</h3>
						</div>
						<p>{recipe?.serves} people</p>
					</div>
					<div className="headerInfo">
						<div>
							{/* <SignalWifi4BarIcon /> */}
							<h3> Difficulty</h3>
						</div>
						<p>{recipe?.difficulty}</p>
					</div>
				</div>
				<div className="recipeHeader__desc">
					<p>{recipe?.description}</p>
				</div>
				<div className="recipeHeader__img">
					<img src={recipe?.image} alt={recipe?.name} />
				</div>
			</div>
		</div>
	);
};

export default RecipeHeader;
