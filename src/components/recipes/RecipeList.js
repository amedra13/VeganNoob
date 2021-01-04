import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import db from '../../database';

const RecipeList = () => {
	const [recipeList, setRecipeList] = useState(null);

	useEffect(() => {
		let recipes = [];
		db.collection('recipes')
			.get()
			.then((list) => {
				list.forEach((doc) => recipes.push(doc.data()));
				setRecipeList(recipes);
			});
	}, []);

	return (
		<div className="recipeList">
			<div>
				<h1>Check out my Recipes!</h1>
			</div>
			<div className="recipeList__list">
				{recipeList?.map((item) => (
					<RecipeCard key={item.id} dish={item} />
				))}
			</div>
		</div>
	);
};

export default RecipeList;
