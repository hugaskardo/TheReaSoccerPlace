import  { EventEmitter } from "events";

class TeamPlayersApi extends EventEmitter {

	getPlayers(teamId, self){
		var players = fetch('/teams/'+ teamId +'/players',{
  			method: 'GET',
  			headers: {
  			'X-Auth-Token': '10abb0d93bc0478da8dc954eaf8fbd3e',
  			'Accept': 'application/json',
  		}
	  	}).then((response) => response.json())
	  	.then((responseJson) => {
	  		self.setState({players : responseJson.players})
	        return responseJson;
	      })
	      .catch((error) => {
	        console.error(error);
	      });

	    return players
	}

	getTeamInfo(teamId, self){
		var teamInfo = fetch('/teams/'+ teamId,{
  			method: 'GET',
  			headers: {
  			'X-Auth-Token': '10abb0d93bc0478da8dc954eaf8fbd3e',
  			'Accept': 'application/json',
  		}
	  	}).then((response) => response.json())
	  	.then((responseJson) => {
	  		self.setState({teamInfo : responseJson})
	        return responseJson;
	      })
	      .catch((error) => {
	        console.error(error);
	      });

	    return teamInfo
	}



}

const teamPlayersApi = new TeamPlayersApi();

export default teamPlayersApi;


