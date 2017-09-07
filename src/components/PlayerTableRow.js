import React from 'react';

export default class PlayerTableRow extends React.Component {
  
  render() {
    if (this.props) {
    const { position, name, nationality } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{position}</td>      
        <td>{nationality}</td>
      </tr>  
    )
    }else {
        return 
          <tr>
            <td>Loading Data</td>
            <td>Loading Data</td>
            <td>Loading Data</td>
          </tr>
    }
  }
}

