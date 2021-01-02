import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Instructions = ({ steps }) => {
	return (
		<div className="instructions">
			<div className="instructions__description">
				<h4>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat
				</h4>
			</div>
			<div className="instructions__ing">
				<h1>Ingredients</h1>
				<div className="instructions__ingContainer">
					<div>
						<h3>Ingredients</h3>
						<ul>
							<li>1 Medium Sized Cauliflower</li>
							<li>1 Medium Sized Cauliflower</li>
							<li>1 Medium Sized Cauliflower</li>
							<li>1 Medium Sized Cauliflower</li>
							<li>1 Medium Sized Cauliflower</li>
						</ul>
					</div>
					<div>
						<h3>Roasting Vegetables </h3>
						<ul>
							<li>2 Carrots, chopped roughly</li>
							<li>2 Carrots, chopped roughly</li>
							<li>2 Carrots, chopped roughly</li>
							<li>2 Carrots, chopped roughly</li>
							<li>2 Carrots, chopped roughly</li>
						</ul>
					</div>
					<div>
						<h3>Duxcells </h3>
						<ul>
							<li>2 tbs Olive Oil </li>
							<li>2 tbs Olive Oil </li>
							<li>2 tbs Olive Oil </li>
							<li>2 tbs Olive Oil </li>
							<li>2 tbs Olive Oil </li>
						</ul>
					</div>
				</div>
			</div>
			<div className="instructions__steps">
				<h1>Steps</h1>
				<ul>
					{steps?.map((step) => (
						<li>{step}</li>
					))}
				</ul>
			</div>

			<div className="instruction__links">
				<Button variant="outlined" component={Link} to="/">
					Home
				</Button>
				<Button variant="outlined">Check out Video</Button>
			</div>
		</div>
	);
};

export default Instructions;
