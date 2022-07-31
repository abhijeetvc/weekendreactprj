import React from 'react'
import { useLocation } from 'react-router-dom'

function About(){

    const location=useLocation()

    return(
        <>
            <h1>About Component!!!</h1>
            <p>This is About Component!!!</p>
            <p>Name : {location.state.name}</p>
            <p>City : {location.state.city}</p>
        </>
    )
}

export default About