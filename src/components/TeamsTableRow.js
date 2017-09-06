import React from 'react';

export default class TeamsTableRow extends React.Component {
  render() {
    if (this.props) {
    return (
      <tr>
          <td>{this.props.position}</td>
          <td>{this.props.teamName}</td>
          <td>{this.props.playedGames}</td>
          <td>{this.props.wins}</td>
          <td>{this.props.draws}</td>
          <td>{this.props.losses}</td>
          <td>{this.props.goals}</td>
          <td>{this.props.goalsAgainst}</td>
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
          </tr>
    }
  }
}

