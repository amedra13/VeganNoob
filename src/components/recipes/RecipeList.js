import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
	return (
		<div className="recipeList">
			<div>
				<h1>Check out my Recipes!</h1>
			</div>
			<div className="recipeList__list">
				<RecipeCard dish="vegan-pizza" />
				<RecipeCard dish="vegan-dumplings" />
			</div>
		</div>
	);
};

export default RecipeList;
