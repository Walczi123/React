import React from 'react'
import { isNumber } from 'util';

const generateArray = (l) =>(Array.from({length: l}, (v,k) => k+1))

class MyAppLab2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {a:0,b:0,array:[]};
      this.handleChangeA = this.handleChangeA.bind(this);
      this.handleChangeB = this.handleChangeB.bind(this);
      this.counter = 1;
    }
  
    handleChangeA(event) {   
      let a =event.target.value;
      console.log("Value changed a: "+a);
      this.setState({a: a});
      a=parseInt(a);
      if((this.state.b>a)&&(a>0)){
        this.setState({array: generateArray(this.state.b-1).filter(element => element>a)});
      }else{
        this.setState({array: []});
      }
    }

    handleChangeB(event) {   
      let b =event.target.value;
      console.log("Value changed b: "+b);
      this.setState({b: b });
      b=parseInt(b);
      if((b>this.state.a)&&(this.state.a>0)){
        this.setState({array: generateArray(b-1).filter(element => element>this.state.a)});
      }else{
        this.setState({array: []});
      }
    }
  
    render() {
      console.time("render - "+this.counter.toString())
      let html=(
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
        <ul>{this.state.array.map(element => <li>{element}</li>)}</ul>
        </div>
      );
      console.timeEnd("render - "+this.counter.toString())
      this.counter++;
      return html;
    }
  }
export default MyAppLab2

