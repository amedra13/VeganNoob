import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
	return (
		<div className="recipeList">
			<div>
				<h1>My Favorites</h1>
			</div>
			<div className="recipeList__list">
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
			</div>
		</div>
	);
};

export default RecipeList;
