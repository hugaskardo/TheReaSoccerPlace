import React from 'react';


export default class TeamCard extends React.Component {

  render() {
  	return (
        <div className="card text-center navBar">
          <div className="card-header">
            Team
          </div>
          <div className="card-block">
            <div className="row align-items-center ">
                <div className="col-md-3">
                  <img className="img-thumbnail  float-right" src={this.props.imgSrc} alt="No Image Found" />
                </div>
                <div className="col-md-9 align-center">
                  <h2 className="card-title">{this.props.name}</h2>
                </div> 
            </div>
          </div>  
        </div>
  	);
 	}
}

