import React from 'react'

class PlayerOne extends React.Component {
  constructor(props) {
    super(props);
  }  
  
  render()
    {
      return(
        <div>
            <b>PlayerOne</b><br/>
            <label>Name: {this.props.name}</label><br/>
            <label>Played number of times: 3</label><br/>
            <button>Play</button>
        </div>
      )
    }
}

export default PlayerOne 