import React from 'react';
import Icon from './images/icon.png';
import { Link } from 'react-router-dom';

const BrandImage = () => {
	return (
		<div className="brandImage">
			<div>
				<img src={Icon} alt="" />
			</div>
			<h1>Loi's Version</h1>
			<div className="brandImage__links">
				<Link to="/recipes">
					<h4>Recipes</h4>
				</Link>
				<h4>About</h4>
				<h4>Contact</h4>
			</div>
		</div>
	);
};

export default BrandImage;
