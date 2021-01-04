import React from 'react';
import Icon from './images/icon.png';
import { Link } from 'react-router-dom';

const BrandImage = () => {
	return (
		<div className="brandImage">
			<div>
				<img className="hidden" src={Icon} alt="placeholder" />
			</div>
			<div>
				<h1>Loi's Version</h1>
				<h4>My version take on my favorite vegan recipes</h4>
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
