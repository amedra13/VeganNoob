import React from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

const Instructions = ({ steps, ingredients }) => {
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
			<div className="instructions__ing">
				<h1>Ingredients</h1>
				<div className="instructions__ingContainer">
					{ingredients && ingredientList(ingredients)}
				</div>
			</div>
			<div className="instructions__steps">
				<h1>Steps</h1>
				{steps?.map((step, i) => (
					<div key={i} className="step">
						<div className="step__number">
							<h6>Step</h6>
							<h2>{i}</h2>
						</div>
						<div className="step__intruc">{step}</div>
					</div>
				))}
			</div>

			{/* <div className="instruction__links">
				<Button variant="outlined" component={Link} to="/">
					Home
				</Button>
				<Button variant="outlined">Check out Video</Button>
			</div> */}
		</div>
	);
};

export default Instructions;
