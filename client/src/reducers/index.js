const initianalState = {
    news: null,
}

const reducer = (state=initianalState, action) => {
    switch(action.type) {
        case 'WRITE-NEWS': 
            return {
                ...state,
                news: action.payload
            }
        case 'ADD-ITEM-NEWS': 
            return {
                ...state,
                news: [
                    ...state.news,
                    action.payload
                ]
            }
        default: return state
    }
}

export default reducer;