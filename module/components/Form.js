import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Store from '../store/Store';
import Textarea from './Textarea';
import Input from './Input';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e) {
        e.preventDefault();
        console.log(Store.getState());
        const author = ReactDOM.findDOMNode(this.refs.textInput).value;
        const text = ReactDOM.findDOMNode(this.refs.textarea).value;
        const length = Store.getState().length;
        Store.dispatch({
            type: 'ADD_NEWS_ITEM',
            payload: {
                id: length + 1,
                author,
                text
            }
        });
        console.log(Store.getState())
    }

    render() {
        return (
            <form action={this.props.action}>
                <Input type='text' placeholder='Author' ref='textInput'/>
                <Textarea rows={20} ref='textarea'/>
                <button onClick={this.handlerClick}>Add news</button>
            </form>
        );
    }
}