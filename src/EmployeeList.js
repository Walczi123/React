import React from 'react'
import Employee from './Employee'
const EmployeeList = (props) =>{

    const employeeList = props.employee.map(employeeData => 
        <Employee key={employeeData._id} data={employeeData}/>
        )
        return(
            <div>
                {employeeList}
            </div>
        )        
}
export default EmployeeList