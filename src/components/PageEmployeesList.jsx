import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadEmployees } from '../redux/thunk-functions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = { 
  //     isLoading: false,
  //   }
  // }

  componentDidMount() {
    if(this.props.alreadyLoaded) {
      return;
    }
    this.props.loadEmployees();
    // this.setState({ isLoading: true });
    // fetch('http://localhost:3004/employees')
    // .then((data) => data.json())
    // // Without Redux
    // // .then((employees) => this.setState({ employees, isLoading: false }));
    // // With Redux
    // .then((employees) => {
    //   this.props.employeesLoaded(employees);
    //   this.setState({ isLoading: false });
    // });
  }

  render() {
    // const { isLoading } = this.state;
    // const { employees } = this.props;
    const { employees, isLoading } = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee.id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    alreadyLoaded: state.alreadyLoaded,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => ({
  //employeesLoaded: employees => dispatch(employeesLoaded(employees))
  loadEmployees: () => dispatch(loadEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)