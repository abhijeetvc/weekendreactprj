import Demo1 from "./Demo1"
import Demo2 from "./Demo2"

function Demo(){
   
    const person={
        name:'John',
        city:'Pune'
      }

    const message="Props Demo!!!"

    const userList=[{
        id:1,
        name:'John',
        city:'Pune'
    },{
        id:2,
        name:'Peter',
        city:'Mumbai'
    }]

    return(
      <div>
      <h1>User Info</h1>
      <p>Name : {person.name}</p>
      <p>City : {person.city}</p>
      {/* <p>Message : {message}</p> */}
      <Demo1 message={message} person={person}/>
      <Demo2 userList={userList}/>
    </div>
    )
  }
  
  export default Demo