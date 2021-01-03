import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Instructions = ({ steps, ingredients, description }) => {
	const ingredientList = (object) => {
		let list = [];
		for (let ing in object) {
			list.push(
				<div key={ing}>
					<h3>{ing}</h3>
					<ul>
						{object[ing].map((ingred, i) => (
							<li key={`${ing}_${i}`}>{ingred}</li>
						))}
					</ul>
				</div>
			);
		}
		return list;
	};
	return (
		<div className="instructions">
			<div className="instructions__description">
				<h4>{description}</h4>
			</div>
			<div className="instructions__ing">
				<h1>Ingredients</h1>
				<div className="instructions__ingContainer">
					{ingredients && ingredientList(ingredients)}
					{/* <div>
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
					</div> */}
				</div>
			</div>
			<div className="instructions__steps">
				<h1>Steps</h1>
				<ul>
					{steps?.map((step, i) => (
						<li key={i}>
							step: {i} {step}
						</li>
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
