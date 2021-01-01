import React from 'react';
import { useParams } from 'react-router-dom';

const FoodRecipe = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>The ID of this page is {id} </h1>
		</div>
	);
};

export default FoodRecipe;
