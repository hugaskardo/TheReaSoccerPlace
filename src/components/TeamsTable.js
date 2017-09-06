import React from 'react';
import DataTable from 'datatables.net/js/jquery.dataTables.js';
import TeamsTableRow from './TeamsTableRow';

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
    const TeamsLiComponent = teams.map((team, index) => {
      return <TeamsTableRow key={index} {...team} />
    });
    
    return (
      	<div>
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