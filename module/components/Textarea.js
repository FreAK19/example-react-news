import React, {Component} from 'react';

export default class Textarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea
                defaultValue='Your text here'
                rows={this.props.rows}
                className='textarea'>
            </textarea>
        );
    }
}