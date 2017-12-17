import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                type={this.props.type}
                placeholder={this.props.placeholder}
                name={this.props.name}
            />
        );
    }
}