import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ dish }) => {
	return (
		<div className="recipeCard">
			<div className="recipeCard__imgContainer">
				<Link to={`/recipes/${dish.id}`}>
					<img src={dish.image} alt="" />
				</Link>
			</div>
			<div className="recipeCard__description">
				<Link to={`/recipes/${dish.id}`} className="recipeCard__link">
					{dish.name}
				</Link>
				<h6>{dish.cardInfo}</h6>
			</div>
		</div>
	);
};

export default RecipeCard;
