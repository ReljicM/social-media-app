const initState = {
    posts: [
        {id: '1', title: 'Help me find peach', content: 'cao caoh caoh'},
        {id: '2', title: 'collect all the stars', content: 'cao caoh caoh'},
        {id: '3', title: 'Help me find my mom', content: 'ke keh keh'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST' :
            console.log('created post', action.post);
            return state;
        case 'CREATE_POST_ERROR' :
            console.log('create post error', action.err);
            return state;
        default:
            return state;
        case 'FETCH_POST' :
            console.log('fetched post', action.post);
            return state;            
    }
    
}

export default postReducer