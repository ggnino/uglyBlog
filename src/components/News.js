import React, { useState } from "react";
import img1 from "../imgs/news.jpg";
import img2 from "../imgs/news2.jpg";
import img3 from "../imgs/news3.jpg";

function News() {
	// useState hook for proper content
	const [news, setNews] = useState("Latest ");
	const [images, setImages] = useState(img1);
	const clicker = (e) => {
		if (e.target.id === "clatest") {
			setNews("Computer Latest");
			setImages(img1);
		} else if (e.target.id === "clast") {
			setNews("Computer Last Week");
			setImages(img1);
		} else if (e.target.id === "cweek") {
			setNews("Computer Week Before");
			setImages(img1);
		} else if (e.target.id === "slatest") {
			setNews("Smartphone Latest");
			setImages(img2);
		} else if (e.target.id === "slast") {
			setNews("Smartphone Last Week");
			setImages(img2);
		} else if (e.target.id === "sweek") {
			setNews("Smartphone Week Before");
			setImages(img2);
		} else if (e.target.id === "glatest") {
			setNews("Gadgets Latest");
			setImages(img3);
		} else if (e.target.id === "glast") {
			setNews("Gadgets Last Week");
			setImages(img3);
		} else if (e.target.id === "gweek") {
			setNews("Gadgets Week Before");
			setImages(img3);
		}
	};
	// Render Component
	return (
		<div className="container-fluid section" id="news">
			<div className="row y">
				<div className="col-md-10" id="news1">
					<h1>{news} News Post# 1</h1>
					<img className="img-fluid imgResize" src={images} alt="news-img" />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
						reprehenderit atque tempora, accusantium quas quisquam architecto
						aliquam a. Accusamus corrupti facilis repellendus pariatur. Lorem,
						ipsum dolor sit amet consectetur adipisicing elit. Quam, illum.
						<a href="#">Read More</a>
					</p>
					<h1>{news} News Post# 2</h1>
					<img className="img-fluid imgResize" src={images} alt="news-img" />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
						reprehenderit atque tempora, accusantium quas quisquam architecto
						aliquam a. Accusamus corrupti facilis repellendus pariatur. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eos.
						<a href="#">Read More</a>
					</p>
					<h1>{news} News Post# 3</h1>
					<img className="img-fluid imgResize" src={images} alt="news-img" />
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
					<h1>Computers</h1>
					<ul>
						<li id="clatest" onClick={clicker}>
							Latest News
						</li>
						<li id="clast" onClick={clicker}>
							Last Week News
						</li>
						<li id="cweek" onClick={clicker}>
							Week Before News
						</li>
					</ul>
					<h1>Smartphones</h1>
					<ul>
						<li id="slatest" onClick={clicker}>
							Latest News
						</li>
						<li id="slast" onClick={clicker}>
							Last Week News
						</li>
						<li id="sweek" onClick={clicker}>
							Week Before News
						</li>
					</ul>
					<h1>Gadgets</h1>
					<ul>
						<li id="glatest" onClick={clicker}>
							Latest News
						</li>
						<li id="glast" onClick={clicker}>
							Last Week News
						</li>
						<li id="gweek" onClick={clicker}>
							Week Before News
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default News;
