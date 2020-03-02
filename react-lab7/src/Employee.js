import React from 'react'

function Employee(props){
    return(  
        <div>          
            {props.data.isActive===true? 
                <div style={{border: '2px solid green', padding:'10px'}}>
                    <p>{props.data.name}    {props.data.age}</p> 
                </div>
                :
                <div style={{border: '2px solid red', padding:'10px'}}>
                    <p>{props.data.name}    {props.data.age}</p> 
                </div>
            }   
            <br/>
        </div> 
    )
}
export default Employee