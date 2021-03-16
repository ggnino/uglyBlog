import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import News from "./components/News";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Navbar />
					<Home />
				</Route>
				<Route path="/about">
					<Navbar />
					<About />
				</Route>
				<Route path="/news">
					<Navbar />
					<News />
				</Route>
				<Route path="/blog">
					<Navbar />
					<Blog />
				</Route>
				<Route path="/contact">
					<Navbar />
					<Contact />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
