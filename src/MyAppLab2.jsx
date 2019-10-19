import React from 'react'
import { isNumber } from 'util';

class MyAppLab2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {a:'',b:''};
      this.handleChangeA = this.handleChangeA.bind(this);
      this.handleChangeB = this.handleChangeB.bind(this);
    }
  
    handleChangeA(event) {   
      console.info("Value changed a: "+event.target.value);
      this.setState({a: event.target.value });
    }

    handleChangeB(event) {   
      console.info("Value changed b: "+event.target.value);
      this.setState({b: event.target.value });
    }
  
    render() {
      return (
        <div>
        <h3>Minimal React  walczakp Lab2</h3>
        <form>
          <label>
            Number a : 
            <input type='number' placeholder=" type a value" onChange={this.handleChangeA} />
          </label>
          <br/>
          <br/>
          <label>
            Number b : 
            <input type='number' placeholder=" type a value" onChange={this.handleChangeB} />
          </label>
        </form>
        </div>
      );
    }
  }
export default MyAppLab2

