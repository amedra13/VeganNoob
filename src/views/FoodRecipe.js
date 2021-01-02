import React, { useState, useEffect } from 'react';
import RecipeHeader from '../components/foodRecipe/RecipeHeader';
import RecipeImg from '../components/foodRecipe/RecipeImg';
import Instructions from '../components/foodRecipe/Instructions';
import { useParams } from 'react-router-dom';
import db from '../database';

const FoodRecipe = () => {
	const [recipe, setRecipe] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		db.collection('recipes')
			.doc(`${id}`)
			.get()
			.then((result) => {
				setRecipe(result.data());
			});
	}, [id]);

	return (
		<div className="foodRecipe">
			<RecipeHeader recipe={recipe} />
			<RecipeImg image={recipe?.image} />
			<Instructions steps={recipe?.steps} />
		</div>
	);
};

export default FoodRecipe;
