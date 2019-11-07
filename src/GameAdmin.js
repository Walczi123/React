import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {
    render()
    {
      return(
        <div >
        <PlayerOne/><br/>
        <PlayerTwo/><br/>
        <label>Set name of the Player One</label>
        <input></input><br/>
        <label>Set name of the Player Two</label>
        <input></input>
        </div>
      )
    }
}

export default GameAdmin 