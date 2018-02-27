import React from 'react';

export default function TestTag(props) { 
    if (props.level <= 3) {
        return (            
            <h1>My Sudoku! Level: {props.level}</h1>
        );
    }
    else if(props.level <=6){
        // 不需要使用额外的元素包裹数组中的元素
        return [
            // 不要忘记 key :)
            <li key="A">First item</li>,
            <li key="B">Second item</li>,
            <li key="C">Third item</li>,
        ];
    }
    else if(props.level < 11){
        let list = []
        for(let i = 0; i < props.level; i++){
            //false、null、undefined 和 true 都是有效的子代，但它们不会直接被渲染。
            //在根据条件来确定是否渲染React元素时非常有用。
            let show = (i + 1) % 2 !== 1 
            list.push(show && <li key={i}>item {i+1}</li>)
        }
        return <ul>{list}</ul>;
    }
    else{
        return ( 
            <div>
                <h1> My Sudoku! Level {props.level} is NOT for human being... </h1>
                <div>This is valid HTML &amp; JSX at the same time.</div>
            </div>   
        );
    }
}
