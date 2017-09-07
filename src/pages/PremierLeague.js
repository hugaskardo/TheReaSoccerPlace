import React from 'react';
import TeamsActualTable from '../Api/TeamsActualTable';
import TeamsTable from '../components/TeamsTable';


export default class PremierLeague extends React.Component {
  constructor(){
  	super();
  	this.state = { teams : [] }
  }

  componentWillMount(){
  	const leagueId = 445;
  	const self = this;
  	this.setState({teams : TeamsActualTable.getTeams(leagueId, self)});
  }

  render() {
		if (this.state.teams.standing) {	
	    	return (
	    		<div className="container">
	    			<TeamsTable teams={this.state.teams.standing} leagueInfo={this.state.teams.leagueCaption}/>
	    		</div>
	    	);
	  	} else {
	  		return <h1>Table is loading...</h1> 
	  	}
  	}
}

