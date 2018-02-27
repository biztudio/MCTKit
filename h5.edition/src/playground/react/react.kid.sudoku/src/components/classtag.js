import React from 'react';

//to define a component via a class
export class MyTestTag extends React.Component{
    render(){
        return (
            <h1>My MyTestTag! Level: {this.props.level}</h1>
        );
    }
}

//为一个类添加局部状态
export class MyTestTagAdvanced extends React.Component {
    constructor(props){
        super(props);
        this.state = { date : new Date() };
    }

    render() {
        return (
            <h1> My MyTestTag! Level: {this.props.level} @ {this.state.date.toLocaleTimeString()} </h1>
        );
    }
}

