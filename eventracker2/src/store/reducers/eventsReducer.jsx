import actiontypes from "../actionTypes";


const initState = {
    data: [],
    loading: false,
    error: null
}


const eventsReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().events.loading:
            return {
                ...state,
                loading: true
            }

        case actiontypes().events.setEvents:
            return {
                data: action.payload,
                loading: false,
                error: null
            }

        case actiontypes().events.addNewEvent:
            return{
                ...state,
                data: [...state.data, action.payload],
                loading: false,
                error: null
            }


            default:
                return state
        }
    }

    export default eventsReducer;