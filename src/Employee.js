import React from 'react'
function Employee(props){
    return(
        <div>
            <div style={{border: '2px solid blue', padding:'10px'}}>
                <p>Id: {props.data.id}</p>
                <p>Active: {props.data.isActive.toString()}</p>
                <p>Age: {props.data.age}</p>
                <p>Name: {props.data.name}</p>               
                <p>Company: {props.data.company}</p>                
                <p>email: {props.data.email}</p>                
            </div>
            <br />
        </div>        
    )
}
export default Employee