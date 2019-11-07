import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PlayerOneNamee: "",
      PlayerTwoName: "",
    };
  }  
  
  render()
    {
      return(
        <div >
        <PlayerOne name={this.state.PlayerOneName}/><br/>
        <PlayerTwo name={this.state.PlayerTwoName}/><br/>
        <label>Set name of the Player One</label>
        <input  value={this.state.PlayerOneName}
                type="text"
                onChange={e => this.setState({ PlayerOneName: e.target.value })}>
                </input><br/>
        <label>Set name of the Player Two</label>
        <input  value={this.state.PlayerTwoName}
                type="text"
                onChange={e => this.setState({ PlayerTwoName: e.target.value })}>
                </input>
        </div>
      )
    }
}

export default GameAdmin 