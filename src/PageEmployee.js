import React from 'react'
import { withRouter, Link } from "react-router-dom";

class PageEmployee extends React.Component{
    constructor(props)
    {
    super(props);
    this.state = {
        active:false,
        age:"",
        name:"",
        company:"",
        email:"",
        isSaving:false
      };
      this.componentPost = this.componentPost.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }
    
    componentPost() {
        this.setState({ isSaving: true });
        fetch('http://localhost:3004/employees', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
			body: JSON.stringify( {
                "isActive": this.state.active,
                "age": this.state.age,
                "name": this.state.name,
                "company": this.state.company,
                "email": this.state.email
              }),
        }).then(() => {this.setState({ isSaving: false })
        }).then(()=>this.props.history.push("/"));
        //console.log(request);
        //this.props.componentDidMount();
    }
    
    handleChange(event){
        this.setState({ [event.target.name] : event.target.value });
    }       

    render()
    {
    return(
        <div>
            <div style={{border: '2px dashed red', padding:'10px'}}>
                {this.state.isSaving ? <label>Saving...</label>:
                <div>
                <label>Active:</label>
                <select name="active" onChange={this.handleChange} >
                <option value="false">false</option>
                <option value="true">true</option>
                </select>
                <br/><br/>
                <label>Age: </label>
                <input name="age" type="number" min="0" 
                    onChange={this.handleChange}></input><br/><br/>
                <label>Name: </label>
                <input name="name"
                    onChange={this.handleChange}></input><br/><br/>             
                <label>Company: </label>
                <input name="company"
                    onChange={this.handleChange}></input><br/><br/>                
                <label>email: </label>
                <input name="email"
                    onChange={this.handleChange}></input><br/><br/>
                <button onClick={this.componentPost}>Submit</button>
                <Link to="/"><button>Cancel</button></Link>
                
                </div>}
            </div>
        </div>        
        )
    }
}
export default withRouter(PageEmployee)