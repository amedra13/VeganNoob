import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<ul>
					<li>
						<Button className="footer__button" component={Link} to="/">
							Home
						</Button>
					</li>
					<li>
						<Button className="footer__button">About</Button>
					</li>
					<li>
						<Button className="footer__button" component={Link} to="/recipes">
							Recipes
						</Button>
					</li>
					<li>
						<Button className="footer__button">contact</Button>
					</li>
					<li>
						<Button className="footer__button">FAQs</Button>
					</li>
				</ul>
			</div>
			<div className="footer__container">
				<ul>
					<li>
						<h4>Find me on:</h4>
					</li>
					<li>
						<Button startIcon={<FacebookIcon />} className="footer__icon">
							Facebook
						</Button>
					</li>
					<li>
						<Button className="footer__icon" startIcon={<InstagramIcon />}>
							Instagram
						</Button>
					</li>
					<li>
						<Button className="footer__icon" startIcon={<YouTubeIcon />}>
							YouTube
						</Button>
					</li>
					<li>
						<Button className="footer__icon" startIcon={<TwitterIcon />}>
							Twitter
						</Button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
