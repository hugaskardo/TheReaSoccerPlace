import React from 'react';
import TeamPlayersApi from '../Api/TeamPlayersApi';
import PlayersTable from '../components/PlayersTable';
import TeamCard from '../components/TeamCard';


export default class TeamPlayers extends React.Component {
  constructor(){
  	super();
  }

  componentWillMount(){
  	const teamId = this.props.match.params.team;
  	const self = this;
    
    this.setState({players : TeamPlayersApi.getPlayers(teamId, self)});
    this.setState({teamInfo : TeamPlayersApi.getTeamInfo(teamId, self)})
  }

  render() {
    if (this.state.players.length) {
	    	return (
	    		<div className="container">
            <TeamCard name={this.state.teamInfo.name} imgSrc={this.state.teamInfo.crestUrl}/>
	    			<PlayersTable players={this.state.players}/>
	    		</div>
	    	);
	  	} else {
	  		return <h1>Players are loading...</h1> 
	  	}
 	}
}

