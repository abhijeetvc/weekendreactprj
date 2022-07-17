import React from 'react'
function PropsList(){

    const userObj={
        firstName:'',
        lastName:''
    }

    const[user,setUser]=React.useState(userObj)
    const[userList,setUserList]=React.useState([])

    const handleChange=(event)=>{
       setUser({...user,[event.target.name]:event.target.value})
    }

    const addData=()=>{
        setUserList([...userList,user])
        document.getElementById("myform").reset()
    }

    return(
        <div>
            <h1>Read Input</h1>
            <form id="myform">
            <input type='text' name='firstName' 
                onChange={handleChange}/>
            <input type='text' name='lastName' 
                onChange={handleChange}/>
                <button type='button' 
                       onClick={addData}>Add</button>
           </form>
           <UserList userList={userList}/>
        </div>
    )
}

function UserList(props){

    return(
        <div>
            <ul>
                {props.userList.map((user)=>(
                    <li>{user.firstName+ " "+user.lastName}</li>
                ))}
            </ul>
        </div>
    )
}

export default PropsList