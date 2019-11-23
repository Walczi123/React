import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age:'',
            email:'',
            phone:'',
            validEmail:true,
            validPhone:true
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
                this.setState({validEmail : true});
            }else{
                this.setState({validEmail : false});
            }
        }else{
            v = this.state.phone.match(/^[0-9]{9}$/i);
            if(v){
                this.setState({validPhone : true});
            }else{
                this.setState({validPhone : false});
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
                                type="phone"
                                onChange={this.handleChange}
                            />
                        </p>
                        {this.state.validPhone?null:<label style={{color:"red",float:"right"}}>Validation error!</label>}
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
                        {this.state.validEmail?null:<label style={{color:"red",float:"right"}}>Validation error!</label>}
                    </div>
                    }
                <button onClick={this.submitClick}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form; 