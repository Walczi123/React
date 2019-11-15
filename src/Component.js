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
        };
        this.activeAdd = this.activeAdd.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this);
      }
    
      componentDidMount() {
        this.setState({ isLoading: true })
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ employees:data }))
        .then(() => {this.setState({ isLoading: false })
        });
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
              <AddComponent cancelAdd={this.cancelAdd}/>
            </div>
            :""
            }
            <br/><br/>
            {this.state.isLoading ? <label>Loading...</label>:
              <div> Data loaded: 
              <br/>
              <EmployeeList employee={this.state.employees}/>
              </div>
            }
          </div>
        )
      }
}
export default Companies
