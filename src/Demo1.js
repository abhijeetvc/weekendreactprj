import React from "react"

//props - properties/information passed from one component
//        to another component
function Demo1(props){

    return(
        <div>
            <h2>Demo1 Component!!!</h2>
            <p> Name : {props.person.name}</p>
            <p> City : {props.person.city}</p>
            <p> Message : {props.message}</p>
        </div>
    )
}

// class Demo1 extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h2>Demo1 Component!!!</h2>
//             </div>
//         )
//     }
// }

export default Demo1