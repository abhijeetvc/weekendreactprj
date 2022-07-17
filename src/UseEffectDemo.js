import { useEffect } from "react"

function UseEffectDemo(){

    // Normal Useeffect with only callback function
    useEffect(()=>{
        console.log('Hiiiiiiiii');
    })

    // Empty dependency array
    useEffect(()=>{
        console.log('Hiiiiiiiii');
    },[])

    // With dependency values
    useEffect(()=>{
        console.log('Hiiiiiiiii');
    },[value])

    return(
        <div>
            <h1>Use Effect Demo</h1>
        </div>
    )
}

export default UseEffectDemo