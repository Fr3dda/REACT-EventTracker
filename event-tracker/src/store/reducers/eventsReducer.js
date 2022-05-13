import actiontypes from "../actiontypes";

const initState = {
    event: [],
    loading: false,
    error: null
}

const eventsReducer = (state = initState, action) => {
    switch(action.type){
        case actiontypes().events.loading:
            return {
                ...state,
                loading: action.payload
            }


            case actiontypes().events.setEvents:
                return{
                    data: action.payload,
                    loading: false,
                    error: null
                }

                case actiontypes().events.failure:
                    return{
                        data: [],
                        loading: false,
                        error: action.payload
                    }
        default:
            return state
    }
}


export default eventsReducer;