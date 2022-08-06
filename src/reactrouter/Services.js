import React from 'react'
import { useParams } from 'react-router-dom'

function Services(){

    const {message}=useParams()
    console.log(message);
    
    return(
        <>
            <h1>Services Component!!!</h1>
            <p>This is Services Component!!!</p>
            <p>Message is: {message}</p>
        </>
    )
}

export default Services

// Information Sharing between components
// a) Props
// b) Context API
// c) Routing