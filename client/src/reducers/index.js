const initianalState = {
    news: null
}

const reducer = (state=initianalState, action) => {
    switch(action.type) {
        case 'TEST_REDUCER': 
            return console.log('test');
        default: return state
    }
}

export default reducer;