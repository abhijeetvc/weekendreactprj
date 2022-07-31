import React from 'react'

function CallBackEvent(){

    const[text,setText]=React.useState('')
    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <CheckCallBack text={text} 
              handleInputChange={handleChange}/>
              <p>{text}</p>
        </div>
    )
}

function CheckCallBack({text,handleInputChange}){
    return(
        <div>
            <input type='text' 
             onChange={handleInputChange}/>
        </div>
    )
}

export default CallBackEvent

//localhost:3000/services