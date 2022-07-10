
// userList[0].name
function Demo2(props){

    return(
        <ul>
            {props.userList.map((user)=>(
                <li>{user.name+' | '+user.city}</li>
            ))}
        </ul>
    )
}

export default Demo2