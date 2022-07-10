import React from 'react'

// State is an object
// applicable to the component itself
// useState - is a hook for initializing
function StateDemo(){
    // let message="State Demo Program!!!"

    const[message,setMessage]=
        React.useState('')

    const display=()=>{
       // message="State Example"
       setMessage('State Example')
      //  console.log(message);
    }

    return(
        <div>
            <h1>State Demo</h1>
            <p>Message : {message}</p>
            <button type="button" 
                    onClick={display}>Check</button>
        </div>
    )
}

export default StateDemo