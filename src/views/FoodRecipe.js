import React from 'react';
import RecipeHeader from '../components/foodRecipe/RecipeHeader';
import RecipeImg from '../components/foodRecipe/RecipeImg';
import Instructions from '../components/foodRecipe/Instructions';
import { useParams } from 'react-router-dom';

const FoodRecipe = () => {
	const { id } = useParams();

	return (
		<div className="foodRecipe">
			<h1>The ID of this page is {id} </h1>
			<RecipeHeader />
			<RecipeImg />
			<Instructions />
		</div>
	);
};

export default FoodRecipe;
