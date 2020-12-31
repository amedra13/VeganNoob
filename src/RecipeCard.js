import React from 'react';
import Tacos from './images/tacos.jpg';

const RecipeCard = () => {
	return (
		<div className="recipeCard">
			<img src={Tacos} alt="" />
			<h2>Vegan Tacos</h2>
			<h6>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum
			</h6>
			<button>Check it Out</button>
		</div>
	);
};

export default RecipeCard;
