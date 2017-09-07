import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "../pages/Layout";
import Bundesliga from "../pages/Bundesliga";
import PremierLeague from "../pages/PremierLeague";
import Ligaespanola from "../pages/Ligaespanola";

import TeamPlayers from "../pages/TeamPlayers";


const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" 	component={Layout}/>
			<Route exact path="/Laliga" 	component={Ligaespanola}/>
			<Route exact path="/Bundes"	component={Bundesliga}/>
			<Route exact path="/Premier"	component={PremierLeague}/>
			<Route  path="/Teams/:team" 	component={TeamPlayers}/>
		</Switch>
	</main>
)

export default Main