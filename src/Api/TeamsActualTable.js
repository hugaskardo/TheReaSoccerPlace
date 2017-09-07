import  { EventEmitter } from "events";

class TeamsActualTable extends EventEmitter {

	getTeams(leagueId, self){
		var team = fetch('/competitions/'+ leagueId +'/leagueTable',{
  			method: 'GET',
  			headers: {
  			'X-Auth-Token': '10abb0d93bc0478da8dc954eaf8fbd3e',
  			'Accept': 'application/json',
  		}
	  	}).then((response) => response.json())
	  	.then((responseJson) => {
	  		self.setState({teams : responseJson})
	        return responseJson;
	      })
	      .catch((error) => {
	        console.error(error);
	      });

	      return team
		}
}

const teamsActualTable = new TeamsActualTable();

export default teamsActualTable;


