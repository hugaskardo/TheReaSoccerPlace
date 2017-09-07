import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
    	<div className="jumbotron">
	      <div className="container">
	        <h1 className="display-3">Welcome!</h1>
	        <p>This is a Basic React WebApp, that will show you three of the main Leagues of europe.
	        Actual positions of the teams and players of each team</p>
	        <p><a className="btn btn-primary btn-lg" target="_blank" href="http://api.football-data.org/index" role="button" rel="noopener">Learn more about the Api I used</a></p>
	      </div>
    </div>
    );
  }
}

