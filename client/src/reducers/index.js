const initianalState = {
    news: null,
    loading: false,
}

const reducer = (state=initianalState, action) => {
    switch(action.type) {
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
        case 'WRITE-NEWS': 
            return {
                ...state,
                loading: false,
                news: action.payload
            }

        
        case 'ADD-ITEM-NEWS': 
            if(state.news) {
                return {
                    ...state,
                    news: [...state.news, action.payload]
                }
            }
            return;

        case 'REMOVE-ITEM-NEWS': 
            if(state.news) {
                const elemIdx = state.news.findIndex(item => item._id === action.payload);
                
                return {
                    ...state,
                    news: [
                        ...state.news.slice(0, elemIdx), 
                        ...state.news.slice(elemIdx+1)
                    ]
                }
            }
            return;
              
        default: return state
    }
}

export default reducer;