import React from "react";
import img1 from "../imgs/about_image.jpg";

function About() {
	// Render Component
	return (
		<div className="container-fluid section" id="about">
			<h1>About Me</h1>
			<img className="img-fluid" src={img1} alt="blogger" />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea
				cum quos quisquam saepe voluptatibus ab, perspiciatis ex possimus.
				Voluptas! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Culpa dolorum neque quam libero aperiam vero, quos porro dolore
				similique repellendus veniam fuga. Quisquam error ea laudantium
				perspiciatis nulla dolor sit, earum veritatis sunt quas blanditiis sequi
				nemo hic id ipsum! Tempora ea eaque reprehenderit? Deleniti voluptate
				rem saepe ea sed. Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Quam, maxime odit! Beatae iusto quidem illo!
			</p>
		</div>
	);
}

export default About;
