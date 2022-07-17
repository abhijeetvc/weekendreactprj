import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

//C1
class LifeCycleMethdos extends React.Component{

    constructor(){
        super()
        this.state={
            number:1
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

        const component=this.state.number ? <ComponentOne/>
                       :<ComponentTwo/>

        return(
            <div>
                <h1>Life Cycle Methods</h1>
                <p>Test Methods</p>
                <p>Number is: {this.state.number}</p>
                <button type='button' onClick={this.add}>Add</button>
                {component}
            </div>
        )
    }
}

export default LifeCycleMethdos
