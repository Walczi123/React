import React from 'react'

class PlayerOne extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }  
  
  render()
    {
      return(
        <div>
            <b>PlayerOne</b><br/>
            <label>Name: {this.props.name}</label><br/>
            <label>Played number of times: {this.count}</label><br/>
            <button type="button" onClick={() => {this.props.myClick(this.props.name); this.count+=1;}}
              disabled={this.props.playing ? "disable" : ""}>
                {this.props.playing ? "The user is playing now" : "Play"}
            </button>
        </div>
      )
    }
}

export default PlayerOne 