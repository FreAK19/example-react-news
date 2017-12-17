import React, {Component} from 'react';
import Article from './../components/Article';
import Store from '../store/Store';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0
        }
    }

    render() {
        const data = Store.getState();
        const articles = data.map((el) => {
            return <Article key={el.id} text={el.text} author={el.author}></Article>
        });
        return (
            <main id='posts'>
                <h1>All accessible news</h1>
                {(articles.length ? articles : 'No available news')}
            </main>
        )
    }
}