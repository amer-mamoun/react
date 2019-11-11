import React, {Component} from 'react';

class Application extends Component {
     
    constructor(props){
        super(props);
    }

    componentWillMount(props, state){

    }
    componentDidMount(props, state){
        console.log("Mounted with", props, state);
    }

    componentWillReceiveProps(props){

    }
    componentWillUpdate(props, state){
        if(this.props.name !== props.name){
            //do sth
        }
    }
    componentDidUpdate(props, state){
              
    }


    render(){
        let name = "Amer";
        
        return (
            <div>
                <h1>Hello, {name}</h1>
                <span>This</span>
            </div>
        );
    }
}

export default Application;