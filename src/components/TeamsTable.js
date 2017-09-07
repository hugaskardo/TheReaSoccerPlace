import React from 'react';
import TeamsTableRow from './TeamsTableRow';
import DataTable from 'datatables.net/js/jquery.dataTables.js';

const $ = require('jquery');


export default class TeamsTable extends React.Component {

  componentDidMount(){
  	var table = $('#example');
  	table.DataTable({
  		dom: '<"html5buttons"B>lTfgitp',
  	});
  }

  render() {
    const { teams } = this.props;
    
    const titleElement = (
      <div className="card navBar">
        <div className="card-block">
          <h4 className="card-title">League Tournament</h4>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.leagueInfo}</h6>
        </div>
      </div>
    );

    const TeamsLiComponent = teams.map((team, index) => {
      return <TeamsTableRow key={index} {...team} />
    });

    
    return (
      	<div>
          {titleElement}
  		    <table id="example" className="display" cellSpacing="0" width="100%">
  		        <thead>
  		            <tr>
  		                <th>Position</th>
  		                <th>Team</th>
  		                <th>Played Games</th>
  		                <th>Wins</th>
  		                <th>Draws</th>
  		                <th>Lost</th>
  		                <th>GF</th>
  		                <th>GC</th>
                      <th>Players</th>
  		            </tr>
  		        </thead>
               <tbody>
                  {TeamsLiComponent}
               </tbody>
  		    </table>
      	</div>
    );
  }
} 