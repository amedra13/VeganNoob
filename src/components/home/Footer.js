import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__links">
				<div className="footer__siteLinks">
					<Link to="/">HOME</Link>
					<Link to="/">ABOUT</Link>
					<Link to="/recipes">RECIPES</Link>
					<Link to="/">CONTACT</Link>
					<Link to="/">FAQS</Link>
				</div>
				<div className="footer__socialLinks">
					<div className="footer__icon">
						<FacebookIcon fontSize="large" />
					</div>
					<div className="footer__icon">
						<InstagramIcon fontSize="large" />
					</div>
					<div className="footer__icon">
						<YouTubeIcon fontSize="large" />
					</div>
					<div className="footer__icon">
						<TwitterIcon fontSize="large" />
					</div>
				</div>
			</div>
			<div className="footer__contact">
				<h1>Lets Work Together</h1>
				<form>
					<input className="firstName" type="text" placeholder="First Name" />
					<input className="lastName" type="text" placeholder="Last Name" />
					<input className="email" type="text" placeholder="Email" />
					<input className="phone" type="text" placeholder="Phone Number" />
					<textarea className="message" placeholder="Message"></textarea>
					<button type="submit">Contact Me</button>
				</form>
			</div>
		</div>
	);
};

export default Footer;
