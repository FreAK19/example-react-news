import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(e) {
        e.preventDefault();

        console.log(author);
    }
    
    render() {
        return <button onClick={this.handlerClick}>{this.props.text}</button>
    }
}