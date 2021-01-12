import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
					<h3>Follow me on</h3>
					<a
						href="https://www.instagram.com/loiversion/?hl=en"
						target="_blank"
						rel="noreferrer"
						className="footer__icon"
					>
						<InstagramIcon fontSize="large" />
					</a>
					<a
						href="https://www.youtube.com/channel/UC8QHCMs3FkoxlNPsRQKXxbg"
						target="_blank"
						rel="noreferrer"
						className="footer__icon"
					>
						<YouTubeIcon fontSize="large" />
					</a>
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
