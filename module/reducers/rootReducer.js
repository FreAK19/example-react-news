const initialState = [
    {
        id: 1,
        author: 'Andrew',
        text: 'Hello my name is Andrew, and today i learn Redux'
    },
    {
        id: 2,
        author: 'Lesick',
        text: 'Hello my name is Lesick, and today i learn OOP'
    },
    {
        id: 3,
        author: 'Nikita',
        text: 'Hi there. We creating own site'
    }
];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEWS_ITEM':
            return [
                ...state, {
                    id: action.payload.id,
                    author: action.payload.author,
                    text: action.payload.text
                }
            ];
        default:
            return state;
    }
};

export default rootReducer;
