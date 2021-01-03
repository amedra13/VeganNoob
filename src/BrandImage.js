import React from 'react';
import Icon from './images/icon.png';
import { Link } from 'react-router-dom';

const BrandImage = () => {
	return (
		<div className="brandImage">
			<div>
				<img src={Icon} alt="placeholder" />
			</div>
			<div>
				<h1>Veganners</h1>
				<h4>Recipes for all levels! From veganners to experts.</h4>
			</div>
			<div className="links">
				<Link to="/recipes">Recipes</Link>
				<h4>About</h4>
				<h4>Contact</h4>
			</div>
		</div>
	);
};

export default BrandImage;
