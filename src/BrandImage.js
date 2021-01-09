import React from 'react';
import Icon from './images/icon.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BrandImage = () => {
	let home = useLocation().pathname;

	const backgroundStyle = home === '/' ? 'transparent' : 'pink';

	return (
		<div
			className="brandImage"
			style={{ backgroundColor: `${backgroundStyle}` }}
		>
			<div>
				<Link to="/">
					<img src={Icon} alt="" />
				</Link>
			</div>
			<Link to="/">
				<h1>Loi's Version</h1>
			</Link>
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
