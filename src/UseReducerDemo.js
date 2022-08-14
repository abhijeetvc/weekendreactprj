
import React, { useReducer } from 'react'

const initialState={count:0}

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}

        case 'decrement':
            return {count: state.count - action.payload}    
    }
}

function UseReducerDemo(){

    const [state, dispatch]=useReducer(reducer, initialState)

   // const[count,setCount]=React.useState(0)

    // const increment=()=>{
    //     setCount(count+1)
    // }

    // const decrement=()=>{
    //     setCount(count-1)
    // }

    return(
        <>
            <p>Count is: {state.count}</p>
            <button type='button' onClick={()=>
                dispatch({type:'increment',payload:10})}>
                Increment</button>
            <button type='button' onClick={()=>
                dispatch({type:'decrement',payload:10})}>
                Decrement</button>
        </>
    )
}

export default UseReducerDemo