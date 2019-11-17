import React from 'react'
import EmployeeList from './EmployeeList'
import AddComponent from './AddComponent'

class Companies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
          isLoading: true,
          add: false,
          deleteId:""
        };
        this.activeAdd = this.activeAdd.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this);
        this.componentGet = this.componentGet.bind(this);
        this.componentDelete = this.componentDelete.bind(this);
      }
    
      componentDidMount() {
        this.componentGet();
      }

      componentGet(){
        this.setState({ isLoading:true});
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ employees:data }))
        .then(() => {this.setState({ isLoading: false })
        });
      }

      componentDelete(userId){
        this.setState({deleteId:userId});
        fetch('http://localhost:3004/employees/'+userId, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({id:this.state.id})
        })
        .then(()=>this.setState({deleteId:""}))
        .then(this.componentGet)
      }

      activeAdd(){
        this.setState({add : true});
      }

      cancelAdd(){
        this.setState({add : false});
      }
    
      render()
      {
        return(
          <div>
            <button onClick={this.activeAdd}>Add employee</button>
            {this.state.add ? 
            <div>
              <br/>
              <AddComponent cancelAdd={this.cancelAdd} reload={this.componentGet}/>
            </div>
            :""
            }
            <br/><br/>
            {this.state.isLoading ? <label>Loading...</label>:
              <div> Data loaded: 
              <br/>
              <EmployeeList employee={this.state.employees} delete={this.componentDelete} delId={this.state.deleteId}/>
              </div>
            }
          </div>
        )
      }
}
export default Companies
