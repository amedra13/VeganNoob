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
			<div className="recipeCard__imgContainer">
				<img src={Tacos} alt="" />
			</div>
			<div className="recipeCard__description">
				<Link to={`/recipes/${dish}`} className="recipeCard__link">
					{formatTitle(dish)}
				</Link>
				<h6>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</h6>
			</div>
		</div>
	);
};

export default RecipeCard;
