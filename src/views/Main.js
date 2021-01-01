import React from 'react';
import BrandImage from '../BrandImage';
import RecipeList from '../RecipeList';

const Main = () => {
	return (
		<div className="main">
			<BrandImage />
			<RecipeList />
			<RecipeList />
		</div>
	);
};

export default Main;
