import React from 'react'

class AddComponent extends React.Component{
    constructor(props)
    {
    super(props);
    }
    
    render()
    {
    return(
        <div>
            <div style={{border: '2px dashed red', padding:'10px'}}>
                <label>Active:</label>
                <select name="active">
                <option value="false">false</option>
                <option value="true">true</option>
                </select>
                <br/><br/>
                <label>Age: </label><input type="number" min="0"></input><br/><br/>
                <label>Name: </label><input></input><br/><br/>             
                <label>Company: </label><input></input><br/><br/>                
                <label>email: </label><input></input><br/><br/>
                <button >Submit</button>
                <button onClick={this.props.cancelAdd}>Cancel</button>                
            </div>
            <br />
        </div>        
        )
    }
}
export default AddComponent