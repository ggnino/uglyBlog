import React from "react";

function Contact() {
	// Render Component
	return (
		<div className="container-fluid section" id="contact">
			<h1>Contact Me</h1>
			<form className="form-group">
				<label>Name:</label>
				<input
					className="form-control m-2"
					type="text"
					placeholder="enter full name"
					name="name"
				/>
				<label>Email:</label>
				<input
					className="form-control m-2"
					type="email"
					placeholder="enter email"
					name="email"
				/>
				<label>Comments:</label>
				<textarea
					className="form-control m-2"
					type="text"
					placeholder="enter comments..."
					name="comments"
				/>
				<button className="btn p-2">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
