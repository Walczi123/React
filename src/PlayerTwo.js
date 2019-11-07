import React from 'react'

class PlayerTwo extends React.Component {
  constructor(props) {
    super(props);
  }   
  
  render()
    {
      return(
        <div>
            <b>PlayerTwo</b><br/>
            <label>Name: {this.props.name}</label><br/>
            <label>Played number of times: 4</label><br/>
            <button>The User is playing now</button>
        </div>
      )
    }
}

export default PlayerTwo 