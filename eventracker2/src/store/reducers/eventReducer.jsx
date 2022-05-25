import actiontypes from '../actionTypes'

const initState = {
    events: 
        {
            data: null,
            loading: false,
            error: null
          },
}


const eventReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().event.addNewEvent:
            return {
                ...state,
                loading: true
            }
                default:
                    return state
    }
}

export default eventReducer













