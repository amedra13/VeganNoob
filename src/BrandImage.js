import React from 'react';
import Icon from './images/icon.png';

const BrandImage = () => {
	return (
		<div className="brandImage">
			<div>
				<img src={Icon} alt="placeholder" />
			</div>
			<div>
				<h1>VeganNoob</h1>
				<h4>Welcome to my website!</h4>
			</div>
			<div className="links">
				<h4>Recipes</h4>
				<h4>About</h4>
				<h4>Contact</h4>
			</div>
		</div>
	);
};

export default BrandImage;
