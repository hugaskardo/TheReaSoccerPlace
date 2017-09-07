import React from 'react';
import PlayerTableRow from './PlayerTableRow';

const $ = require('jquery');


export default class PlayersTable extends React.Component {

  componentDidMount(){
  	var table = $('#playersTable');
  	table.DataTable({
  		dom: '<"html5buttons"B>lTfgitp',
  	});
  }

  render() {
    const { players } = this.props;
    const PlayersLiComponent = players.map((player, index) => {
      return <PlayerTableRow key={index} {...player} />
    });
    
    return (
      	<div>
  		    <table id="playersTable" className="display" cellSpacing="0" width="100%">
  		        <thead>
  		            <tr>
  		                <th>Name</th>
  		                <th>Position</th>
  		                <th>Nationality</th>
  		            </tr>
  		        </thead>
               <tbody>
                  {PlayersLiComponent}
               </tbody>
  		    </table>
      	</div>
    );
  }
} 