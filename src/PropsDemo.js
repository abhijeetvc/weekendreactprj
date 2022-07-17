import React from 'react'
function PropsDemo(){

    const message="Hellooooo!!!"
    const person={
        name:'Abc',
        city:'Pune'
    }

    const[value,setValue]=React.useState('')
    const[data,setData]=React.useState('')

    const handleChange=(event)=>{
        setValue(event.target.value)
    }

    const sendData=()=>{
        setData(value)
    }
    return(
        <div>
            <h1>Parent Component</h1>
            <input type='text' onChange={handleChange}/>
            <button type='button' onClick={sendData}>Send</button>
            {/* <p>Message : {message}</p> */}
            {/* <ChildComponent message={message} person={person}/> */}
            <ChildComponent data={data}/>
        </div>
    )
}

function ChildComponent(props){

    return(
        <div>
            <h2>Child Component</h2>
            <p>Value is: {props.data}</p>
            {/* <p>Message : {props.message}</p>
            <p>Name : {props.person.name}</p> */}
        </div>
    )
}

export default PropsDemo