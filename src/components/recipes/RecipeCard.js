import React from 'react';
import Tacos from '../../images/tacos.jpg';
import { Link } from 'react-router-dom';

const RecipeCard = ({ dish }) => {
	const formatTitle = (name) => {
		return name
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1) + ' ');
	};
	return (
		<div className="recipeCard">
			<img src={Tacos} alt="" />
			<h2>{formatTitle(dish)}</h2>
			<h6>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</h6>
			<Link to={`/recipes/${dish}`}>{formatTitle(dish)}</Link>
		</div>
	);
};

export default RecipeCard;
