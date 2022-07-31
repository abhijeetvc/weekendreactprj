import React, { createContext } from 'react'
import CheckContext1 from './CheckContext1'
import CheckContext2 from './CheckContext2'

export const MyContext=createContext()

function UseContextDemo(){

    const[val,setVal]=React.useState(100)

    return(
        <>
          <MyContext.Provider value={{val,setVal}}>
            <h1>React Context Demo!!!</h1>
            <p>Val : {val}</p>
            <CheckContext1/>
            <CheckContext2/>
          </MyContext.Provider>
        </>
    )

}

export default UseContextDemo

