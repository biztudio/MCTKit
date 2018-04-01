/*jshint esversion: 6 */
import React from 'react';
import randomlibiz from 'randomlibiz';
//import './formular.css';

export class FormularTag extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        console.log(this.props.level + ', ' + this.props.length)
        return (
            <div>1 + 1 = </div>
        );
    }
};

FormularTag.defaultProps = {
    length: 10,//how many formular calculation items
    level: 1//1: less than 10 and only 'add'; 2: less than 10 and 'add' & 'reduce'
}