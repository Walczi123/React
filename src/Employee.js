import React from 'react'

function Employee(props){
    return(
        
        <div>
            <div style={{border: '2px solid blue', padding:'10px'}}>
                {props.delId==props.data.id? 
                <label>Deleting …</label>:
                <div>
                    <p>Id: {props.data.id}</p>
                    <p>Active: {props.data.isActive.toString()}</p>
                    <p>Age: {props.data.age}</p>
                    <p>Name: {props.data.name}</p>               
                    <p>Company: {props.data.company}</p>                
                    <p>email: {props.data.email}</p>                
                    <button style={{float: "right", padding:'20px', marginTop:'-220px' }}
                     onClick={()=>{props.deleteUser([props.data.id])}}>Delete</button>
                </div>
                }
            </div>
            <br />
        </div>        
    )
}
export default Employee