import React from 'react'
function InputRead(){

    // const[firstName,setFirstName]=React.useState('')
    // const[lastName,setLastName]=React.useState('')

    // const handleFirstChange=(event)=>{
    //     setFirstName(event.target.value)      
    // }

    // const handleLastChange=(event)=>{
    //     setLastName(event.target.value)
    // }
    const userObj={
        firstName:'',
        lastName:''
    }
    const[user,setUser]=React.useState(userObj)

    const handleChange=(event)=>{
        console.log(event.target);
        setUser({...user,[event.target.name]:event.target.value})
    }

    return(
        <div>
            <h1>Read Input</h1>
            {/* <input type='text' name='firstName' 
                onChange={handleFirstChange}/>
            <input type='text' name='lastName' 
                onChange={handleLastChange}/>
            <p>Input Result1 : {firstName}</p>
            <p>Input Result2 : {lastName}</p> */}

            <input type='text' name='firstName' 
                onChange={handleChange}/>
            <input type='text' name='lastName' 
                onChange={handleChange}/>
            <p>Input Result1 : {user.firstName}</p>
            <p>Input Result2 : {user.lastName}</p>
        </div>
    )
}

export default InputRead