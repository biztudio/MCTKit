import React from 'react';

//to define a component via a class
class MyTestTag extends React.Component{
    render(){
        return (
            <h1>My MyTestTag! Level: {this.props.level}</h1>
        );
    }
}

export default MyTestTag;