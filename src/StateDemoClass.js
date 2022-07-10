import React from 'react'

// State is an object
// applicable to the component itself
// useState - is a hook for initializing
class StateDemoClass extends React.Component{
    // let message="State Demo Program!!!"

    constructor(){
        super()
        this.state={
            message:'State Program Demo!!!'
        }
    }

     display=()=>{
       // message="State Example"
      // setMessage('State Example')
      this.setState({message:"State Example"})
      //  console.log(message);
    }

    render(){
        return(
            <div>
                <h1>State Demo</h1>
                <p>Message : {this.state.message}</p>
                <button type="button" 
                        onClick={this.display}>Check</button>
            </div>
        )
    }
    
}

export default StateDemoClass