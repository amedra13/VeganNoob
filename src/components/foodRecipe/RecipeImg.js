import React from 'react';

const RecipeImg = ({ image }) => {
	return (
		<div className="recipeImg">
			<img src={image} alt="placeholder" />
		</div>
	);
};

export default RecipeImg;
