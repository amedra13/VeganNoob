import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		border: '2px solid red',
		width: '90%',
		margin: '20px auto',
		backgroundColor: '#77bfa3',
	},
	list: {
		listStyle: 'none',
	},
	listItem: {},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid container justify="space-evenly" className={classes.root} spacing={2}>
			<Grid item>
				<ul className={classes.list}>
					<li>Home</li>
					<li>About</li>
					<li>Recipes</li>
					<li>Contact</li>
					<li>FAQs</li>
				</ul>
			</Grid>
			<Grid item>
				<h1>Follow Me!</h1>
				<ul className={classes.list}>
					<li>Youtube</li>
					<li>Instagram</li>
					<li>Facebook</li>
					<li>Twitter</li>
				</ul>
			</Grid>
		</Grid>
	);
};

export default Footer;
