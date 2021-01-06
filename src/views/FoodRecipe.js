import React, { useState, useEffect } from 'react';
import RecipeHeader from '../components/foodRecipe/RecipeHeader';
import Instructions from '../components/foodRecipe/Instructions';
import { useParams } from 'react-router-dom';
import db from '../database';

const FoodRecipe = () => {
	const [recipe, setRecipe] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		db.collection('recipes')
			.where('id', '==', id)
			.get()
			.then((result) => {
				setRecipe(result.docs[0].data());
			});
	}, [id]);

	return (
		<div className="foodRecipe">
			<RecipeHeader recipe={recipe} />
			<Instructions steps={recipe?.steps} ingredients={recipe?.ingredients} />
		</div>
	);
};

export default FoodRecipe;
