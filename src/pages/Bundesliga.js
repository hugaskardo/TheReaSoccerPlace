import React from 'react';
import TeamsActualTable from '../Api/TeamsActualTable';
import TeamsTable from '../components/TeamsTable';

export default class Bundesliga extends React.Component {
	constructor(){
		super();
		this.state = { teams : [] }
	}

	componentWillMount(){
	  	const leagueId = 452;
	  	const self = this;
	  	this.setState({teams : TeamsActualTable.getTeams(leagueId, self)});
	}
	
	render() {
		if (this.state.teams.standing) {	
	    	return (
	    		<div className="container">
	    			<TeamsTable teams={this.state.teams.standing}/>
	    		</div>
	    	);
	  	} else {
	  		return <h1>Table is loading...</h1> 
	  	}
  	}
}

