import React from 'react';
import Tacos from './images/tacos.jpg';

const RecipeCard = () => {
	return (
		<div className="recipeCard">
			<img src={Tacos} alt="" />
			<h2>Vegan Tacos</h2>
			<h6>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</h6>
			<button>Check it Out</button>
		</div>
	);
};

export default RecipeCard;
