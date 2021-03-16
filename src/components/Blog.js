import React, { useState } from "react";
import img1 from "../imgs/header_image.jpg";
import img2 from "../imgs/design.jpg";
import img3 from "../imgs/freelance.jpg";

function Blog() {
	// useState hook for proper content
	const [blog, setBlog] = useState("Latest ");
	const [images, setImages] = useState(img1);
	const clicker = (e) => {
		if (e.target.id === "clatest") {
			setBlog("Coding Latest");
			setImages(img1);
		} else if (e.target.id === "clast") {
			setBlog("Coding Last Week");
			setImages(img1);
		} else if (e.target.id === "cweek") {
			setBlog("Coding Week Before");
			setImages(img1);
		} else if (e.target.id === "dlatest") {
			setBlog("Design Latest");
			setImages(img2);
		} else if (e.target.id === "dlast") {
			setBlog("Design Last Week");
			setImages(img2);
		} else if (e.target.id === "dweek") {
			setBlog("Design Week Before");
			setImages(img2);
		} else if (e.target.id === "flatest") {
			setBlog("Freelancing Latest");
			setImages(img3);
		} else if (e.target.id === "flast") {
			setBlog("Freelancing Last Week");
			setImages(img3);
		} else if (e.target.id === "fweek") {
			setBlog("Freelancing Week Before");
			setImages(img3);
		}
	};
	// Render Component
	return (
		<div className="container-fluid section" id="news">
			<div className="row y">
				<div className="col-md-10" id="news1">
					<h1>{blog} Post# 1</h1>
					<img className="img-fluid imgResize" src={images} alt="blog-img" />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
						reprehenderit atque tempora, accusantium quas quisquam architecto
						aliquam a. Accusamus corrupti facilis repellendus pariatur. Lorem,
						ipsum dolor sit amet consectetur adipisicing elit. Quam, illum.
						<a href="#">Read More</a>
					</p>
					<h1>{blog} Post# 2</h1>
					<img className="img-fluid imgResize" src={images} alt="blog-img" />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
						reprehenderit atque tempora, accusantium quas quisquam architecto
						aliquam a. Accusamus corrupti facilis repellendus pariatur. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eos.
						<a href="#">Read More</a>
					</p>
					<h1>{blog} Post# 3</h1>
					<img className="img-fluid imgResize" src={images} alt="blog-img" />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
						reprehenderit atque tempora, accusantium quas quisquam architecto
						aliquam a. Accusamus corrupti facilis repellendus pariatur. Lorem,
						ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
						sunt!
						<a href="#">Read More</a>
					</p>
				</div>
				<div className="col-md-2 section2">
					<h1>Coding</h1>
					<ul>
						<li id="clatest" onClick={clicker}>
							Latest Posts
						</li>
						<li id="clast" onClick={clicker}>
							Last Week Posts
						</li>
						<li id="cweek" onClick={clicker}>
							Week Before Posts
						</li>
					</ul>
					<h1>Design</h1>
					<ul>
						<li id="dlatest" onClick={clicker}>
							Latest Posts
						</li>
						<li id="dlast" onClick={clicker}>
							Last Week Posts
						</li>
						<li id="dweek" onClick={clicker}>
							Week Before Posts
						</li>
					</ul>
					<h1>Freelancing</h1>
					<ul>
						<li id="flatest" onClick={clicker}>
							Latest Posts
						</li>
						<li id="flast" onClick={clicker}>
							Last Week Posts
						</li>
						<li id="fweek" onClick={clicker}>
							Week Before Posts
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Blog;
