import React from 'react'

//Lab1
const generateArray = (l) =>(Array.from({length: l}, (v,k) => k+1))
const SquareArray = (a) =>(Array.from(a,x=>Math.sqrt(x)))
//end Lab1

class MyAppLab2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {a:0,b:0,array:[],processarray:[],flag:false};
      this.handleChangeA = this.handleChangeA.bind(this);
      this.handleChangeB = this.handleChangeB.bind(this);
      this.processArray = this.processArray.bind(this);
      this.click = this.click.bind(this);
      this.counter = 1;
    }
  
    handleChangeA(event) {   
      let a =event.target.value;
      console.log("Value changed a: "+a);
      this.setState({a: a});
      a=parseInt(a);
      let arr;
      if((this.state.b>a)&&(a>0)){
        arr=generateArray(this.state.b-1).filter(element => element>a);      
      }else{
        arr=[];
      }
      this.setState({array: arr});
      if(this.state.flag){
        this.setState({processarray: SquareArray(arr)});
      }else{
        this.setState({processarray: []});
      }
    }

    handleChangeB(event) {   
      let b =event.target.value;
      console.log("Value changed b: "+b);
      this.setState({b: b });
      b=parseInt(b);
      let arr
      if((b>this.state.a)&&(this.state.a>0)){
        arr=generateArray(b-1).filter(element => element>this.state.a)      
      }else{
        arr=[];
      }
      this.setState({array: arr });
      if(this.state.flag){
        this.setState({processarray: SquareArray(arr)});
      }else{
        this.setState({processarray: []});
      } 
    }

    processArray() { 
      if(this.state.flag && this.state.array.length>0){
        this.setState({processarray: SquareArray(this.state.array)});
      }else{
        this.setState({processarray: []});
        //this.setState({flag: !this.state.flag});
      }     
    }

    click(){
      this.state.flag =!this.state.flag;
      this.processArray();
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
        <button onClick={this.click}>Process array</button>
        <ul>{this.state.processarray.map(element => <li>{element}</li>)}</ul>
        </div>
      );
      console.timeEnd("render - "+this.counter.toString())
      this.counter++;
      return html;
    }
  }
export default MyAppLab2

