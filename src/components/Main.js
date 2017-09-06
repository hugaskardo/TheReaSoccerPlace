import React from 'react';
import { Route, index, Link, Switch } from 'react-router-dom';

import Layout from "../pages/Layout";
import Bundesliga from "../pages/Bundesliga";
import PremierLeague from "../pages/PremierLeague";
import Ligaespanola from "../pages/Ligaespanola";
// ========================================

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" 	component={Layout}/>
			<Route path="/Laliga" 	component={Ligaespanola}/>
			<Route path="/Bundes"	component={Bundesliga}/>
			<Route path="/Premier"	component={PremierLeague}/>
		</Switch>
	</main>
)

export default Main