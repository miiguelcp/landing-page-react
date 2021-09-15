import React from "react";
import { NavBar } from "./navbar.jsx";
import { JumboTron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<NavBar />
			<JumboTron />
			<Card />
		</React.Fragment>
	);
};

export default Home;
