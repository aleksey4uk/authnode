const initianalState = {
    news: null,
    loading: false,
}

const reducer = (state=initianalState, action) => {
    switch(action.type) {
        case 'WRITE-NEWS': 
            return {
                ...state,
                loading: false,
                news: action.payload
            }

        case 'ADD-ITEM-NEWS': 
            console.log(action.payload)
            console.log(state)
            return {
                ...state,
                news: [
                    ...state.news,
                    action.payload
                ]
            }

        case 'LOAD-NEWS': 
            return {
                ...state,
                loading: true 
            }

        case 'LOAD-COMPLETE': 
            return {
                ...state,
                loading: false 
            }      
              
        default: return state
    }
}

export default reducer;