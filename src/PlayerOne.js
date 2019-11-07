import React from 'react'

class PlayerOne extends React.Component {
    render()
    {
      return(
        <div>
            <b>PlayerOne</b><br/>
            <label>Name: name from input field</label><br/>
            <label>Played number of times: 3</label><br/>
            <button>Play</button>
        </div>
      )
    }
}

export default PlayerOne 