import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamsTableRow extends React.Component {
  
  getTeamid(linkParam){
    let id;
    if (linkParam) {
      id = linkParam.slice(-2);
      id = id.replace('/','');
    }else {
      id = "No info";
    }
    return id;
  }

  render() {
    if (this.props) {

    let idTeam = this.props._links.team.href;

    const { position, teamName, 
            playedGames, wins,
            draws, losses,
            goals, goalsAgainst } = this.props;

    return (
      <tr>
          <td>{position}</td>
          <td>{teamName}</td>
          <td>{playedGames}</td>
          <td>{wins}</td>
          <td>{draws}</td>
          <td>{losses}</td>
          <td>{goals}</td>
          <td>{goalsAgainst}</td>
          <td><Link to={"/Teams/" + this.getTeamid(idTeam)}>Players</Link></td>
      </tr>  
    );
    }else {
      return 
          <tr >
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
          </tr>
    }
  }
}

