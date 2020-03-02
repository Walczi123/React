import React from 'react'
import Employee from './Employee'
const EmployeeList = (props) =>{

    const employeeList = props.employee.map(employeeData => 
        <Employee key={employeeData.id} data={employeeData} deleteUser={props.delete} delId={props.delId}/>
        )
        return(
            <div>
                {employeeList}
            </div>
        )        
}
export default EmployeeList