import React, {Component} from 'react';
import {render} from 'react-dom';
import './style.css'
import Form from './components/Form';
import Posts from './section/Posts';


class App extends Component {
    render() {
        return (
            <div>
                <Form />
                <Posts />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));