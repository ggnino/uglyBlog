import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
	// variable for web page location
	let path = window.location.pathname;
	// useState hook for styling
	const [active, setActive] = useState({
		link1: "nav-link",
		link2: "nav-link",
		link3: "nav-link",
		link4: "nav-link",
		link5: "nav-link",
	});
	//useEffect hook for proper styling on each nav link
	useEffect(() => {
		if (path === "/") {
			setActive({
				link1: "nav-link active",
				link2: "nav-link",
				link3: "nav-link",
				link4: "nav-link",
				link5: "nav-link",
			});
		} else if (path === "/about") {
			setActive({
				link2: "nav-link active",
				link1: "nav-link",
				link3: "nav-link",
				link4: "nav-link",
				link5: "nav-link",
			});
		} else if (path === "/news") {
			setActive({
				link3: "nav-link active",
				link1: "nav-link",
				link2: "nav-link",

				link4: "nav-link",
				link5: "nav-link",
			});
		} else if (path === "/blog") {
			setActive({
				link4: "nav-link active",
				link1: "nav-link",
				link2: "nav-link",
				link3: "nav-link",
				link5: "nav-link",
			});
		} else if (path === "/contact") {
			setActive({
				link1: "nav-link",
				link2: "nav-link",
				link3: "nav-link",
				link4: "nav-link",
				link5: "nav-link active",
			});
		}
	}, [path]);
	// onClick event handler
	const clicker = (e) => {
		if (e.target.innerText === "Home") {
			setActive({
				link1: "nav-link active",
				link2: "nav-link",
				link3: "nav-link",
				link4: "nav-link",
				link5: "nav-link",
			});
		} else if (e.target.innerText === "About") {
			setActive({
				link2: "nav-link active",
				link1: "nav-link",
				link3: "nav-link",
				link4: "nav-link",
				link5: "nav-link",
			});
		} else if (e.target.innerText === "News") {
			setActive({
				link3: "nav-link active",
				link1: "nav-link",
				link2: "nav-link",

				link4: "nav-link",
				link5: "nav-link",
			});
		} else if (e.target.innerText === "Blog") {
			setActive({
				link4: "nav-link active",
				link1: "nav-link",
				link2: "nav-link",
				link3: "nav-link",
				link5: "nav-link",
			});
		} else if (e.target.innerText === "Contact") {
			setActive({
				link1: "nav-link",
				link2: "nav-link",
				link3: "nav-link",
				link4: "nav-link",
				link5: "nav-link active",
			});
		}
	};
	// Render Component
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
				<div className="container-fluid">
					<div className="navbar-brand">
						The <span id="navBrand">Ugly</span> Blog
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav" onClick={clicker}>
							<Link className={active.link1} aria-current="page" to="/">
								<li>Home</li>
							</Link>
							<Link className={active.link2} to="/about">
								<li>About</li>
							</Link>
							<Link className={active.link3} to="/news">
								<li>News</li>
							</Link>
							<Link className={active.link4} to="/blog">
								<li>Blog</li>
							</Link>
							<Link className={active.link5} to="/contact">
								<li>Contact</li>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
