// function person(){
//     return(
//         <h2>Hi, Welcome to react</h2>
//     )
// }
import React from 'react'

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I am {props.name} and {props.age} old</p>
            <p>{props.children}</p>
        </div>
    )
}

 export default person;