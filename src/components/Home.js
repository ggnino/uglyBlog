import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../imgs/header_image.jpg";
import img2 from "../imgs/design.jpg";
import img3 from "../imgs/freelance.jpg";
function Home() {
	// useState hooks for styling
	const [bg, setBg] = useState({
		background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1}) center/cover`,
	});
	const [style, setStyle] = useState({
		heading: "Learning how to code is fun! ",
	});

	// onClick event handler
	const clicker = (e) => {
		if (e.target.id === "coding") {
			setStyle({ heading: "Learning how to code is fun!" });
			setBg({
				background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1}) center/cover`,
			});
		} else if (e.target.id === "design") {
			setStyle({ heading: "Web design done right." });
			setBg({
				background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img2}) center/cover`,
			});
		} else if (e.target.id === "freelance") {
			setStyle({ heading: "How to start a freelancing career." });
			setBg({
				background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img3}) center/cover`,
			});
		}
	};
	// Render Component
	return (
		<div className="container-fluid section" id="home">
			<div className="row">
				<div className="col-md-10" style={bg} id="home1">
					<Link to="/blog">
						<h1>{style.heading}</h1>
					</Link>
					<ul>
						<li>Published On:</li>
						<li> March 1, 2021</li>
						<li>Author:</li>
						<li>John Doe</li>
						<li>Category:</li>
						<li>Coding</li>
					</ul>
				</div>
				<div className="col-md-2 section2">
					<div className="mt-4">
						<h1>Categories</h1>
						<ul>
							<li onClick={clicker} id="coding">
								Coding
							</li>
							<li onClick={clicker} id="design">
								Design
							</li>
							<li onClick={clicker} id="freelance">
								Freelancing
							</li>
						</ul>
					</div>

					<form className="form-group mt-5">
						<h1>Newletter</h1>
						<input
							className="form-control m-2"
							type="text"
							placeholder="enter full name"
							name="name"
						/>
						<input
							className="form-control m-2"
							type="email"
							placeholder="enter email"
							name="email"
						/>
						<button className="btn">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Home;
