import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age:'',
            email:'',
            phone:'',
            validEmail:false,
            validPhone:false
        };
        this.changeAge=this.changeAge.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.submitClick=this.submitClick.bind(this);
    }

    changeAge(event){
        const value = parseInt(event.target.value, 10);
        if(Number.isInteger(value)){
            this.setState({age: value});
        }
    }

    handleChange(event){
        this.setState({ [event.target.name] : event.target.value });
    } 

    submitClick(){
        let v;
        if(this.state.age >= 18){
            v = this.state.email.match(/^([\w.%+-]+)@([\w.%+-]+\.)+([\w.%+-]{2,})$/);
            if(v){
                this.setState({validEmail : false});
            }else{
                this.setState({validEmail : true});
            }
        }else{
            v = this.state.phone.match(/^[0-9]{9}$/i);
            if(v){
                this.setState({validPhone : false});
            }else{
                this.setState({validPhone : true});
            }
        }
    }

    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center'}} >
                <form style={{width:"400px"}}>
                    <p>Age:
                        <input style={{float:"right"}}
                            id="age"
                            onChange={this.changeAge}
                            type="number"
                        />
                    </p>
                    { this.state.age < 18 ? 
                    <div>
                        <p>Parent Name:
                            <input style={{float:"right"}}
                                name="name"
                                type="text"
                            />
                        </p>
                        <p>Parent Phone no:
                            <input style={{float:"right"}}
                                name="phone"
                                type="tel"
                                onChange={this.handleChange}
                            />
                        </p>
                        {this.state.validPhone?<label style={{color:"red",float:"right"}}>"Validation error!"</label>:null}
                    </div>
                    :
                    <div>
                        <p>Name:
                            <input style={{float:"right"}}
                                name="name"
                                type="text"
                            />
                        </p>
                        <p>Email:
                            <input style={{float:"right"}}
                                name="email"
                                type="email"
                                onChange={this.handleChange}
                            />
                        </p>
                        {this.state.validEmail?<label style={{color:"red",float:"right"}}>"Validation error!"</label>:null}
                    </div>
                    }
                <button onClick={()=>this.submitClick()}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form; 