import React,{ useEffect } from "react"
import axios from "axios"

function UseEffectDemo(){

    const[value,setValue]=React.useState(0)
    const[userList,setUserList]=React.useState([])

    // Normal Useeffect with only callback function
    // useEffect(()=>{
    //     console.log('Hiiiiiiiii');
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.data)
    //     .then(res=>{
    //         setUserList(res)
    //     })
    // })

    // Empty dependency array - only once
    // useEffect(()=>{
    //     console.log('Hiiiiiiiii');
    // },[])

    // With dependency values - after rendering of component 
      //   as well as on state update
    // useEffect(()=>{
    //     console.log('Hiiiiiiiii');
    // },[value])

    const changeValue=()=>{
        setValue(value+1)
    }

    return(
        <div>
            <h1>Use Effect Demo</h1>
            <p>Value is : {value}</p>
            <button type="button" onClick={changeValue}>
                Change
            </button>
        </div>
    )
}

export default UseEffectDemo