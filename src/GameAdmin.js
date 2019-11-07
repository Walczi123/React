import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: "First",
      playerTwoName: "Second",
      playerOnePlaying: false,
      playerTwoPlaying: false
    };
    this.onClick= this.onClick.bind(this);
  }  

  onClick(name) {
    console.log("Start play "+name);
    this.setState(oldstate => ({
      playerOnePlaying: name === oldstate.playerOneName,
      playerTwoPlaying: name === oldstate.playerTwoName
    }));
  }

  render()
    {
      return(
        <div >
        <PlayerOne name={this.state.playerOneName}
              playing={this.state.playerOnePlaying}
              myClick={this.onClick}
              /><br/>
        <PlayerTwo name={this.state.playerTwoName}  
              playing={this.state.playerTwoPlaying}
              myClick={this.onClick}
              /><br/>
        <label>Set name of the Player One</label>
        <input  value={this.state.playerOneName} 
                type="text"
                onChange={e => this.setState({ playerOneName: e.target.value })}>
                </input><br/>
        <label>Set name of the Player Two</label>
        <input  value={this.state.playerTwoName} 
                type="text"
                onChange={e => this.setState({ playerTwoName: e.target.value })}>
                </input>
        </div>
      )
    }
}

export default GameAdmin 