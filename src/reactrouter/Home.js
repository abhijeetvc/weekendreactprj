import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){

    const message="Hello!!!"
    const navigate=useNavigate()

    const person={
        name:"John",
        city:"Pune"
    }

    const sendInfo=()=>{
        navigate(`/services/${message}`)
    }

    const sendObjInfo=()=>{
        navigate(`/about`,{state:person})
    }

    return(
        <>
            <h1>Home Component!!!</h1>
            <p>This is Home Component!!!</p>
            <button type='button' onClick={sendInfo}>
                Send Info
            </button>

            <button type='button' onClick={sendObjInfo}>
                Send Obj
            </button>
        </>
    )
}

export default Home 