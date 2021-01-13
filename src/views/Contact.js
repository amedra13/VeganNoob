import React from 'react';

const Contact = () => {
	return (
		<div className="contact">
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
	);
};

export default Contact;
