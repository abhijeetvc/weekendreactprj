import React from 'react'

class LifeCycleMethdos extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    display=()=>{
        console.log('hiiiiiiii');
    }

    componentDidMount(){
        console.log('helllooooooo');
    }

    add=()=>{
        this.setState({number:this.state.number+1})
    }
    componentDidUpdate(){
       console.log('COmponent did mount executed');
    }

    render(){
        return(
            <div>
                <h1>Life Cycle Methods</h1>
                <p>Test Methods</p>
                <p>Number is: {this.state.number}</p>
                <button type='button' onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default LifeCycleMethdos
