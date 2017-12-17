import {createStore} from 'redux';
import rootReducer from './../reducers/rootReducer'

const ADD_NEWS_ITEM = 'ADD_NEWS_ITEM';
const Store = createStore(rootReducer);

export default Store;