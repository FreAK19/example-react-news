import React, {Component} from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const target = e.target.parentElement;
        target.classList.add('none');
    }

    render() {
        return (
            <article className='article'>
                <span className='close' onClick={this.handleClick}>x</span>
                <h1>Author: {this.props.author}</h1>
                <p>{this.props.text}</p>
            </article>
        )
    }
}

export default Article;