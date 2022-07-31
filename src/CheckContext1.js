import React, { useContext } from 'react'
import { MyContext } from './UseContextDemo'

function CheckContext1(){

    const {val,setVal}=useContext(MyContext)

    const changeValue=()=>{
        setVal(val+10)
    }

    return(
        <>
            <h2>Check Context</h2>
            <p>Value is : {val}</p>
            <button type='button' onClick={changeValue}>
                Change
            </button>
        </>
    )
}

export default CheckContext1