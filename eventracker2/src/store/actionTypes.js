

const actiontypes = () => {
    return {
        events: {
            loading: 'LOADING_EVENTS',
            setEvents: 'SET_EVENTS',
            addNewEvent: 'ADD_NEW_EVENT',
            failure: 'EVENT_FAILURE'
        },
        event: {
            setEvent: 'SET_EVENT',
            addNewEvent: 'ADD_EVENT',
            loadEventStart: 'LOAD_EVENT_START',
            loadEventSuccess: 'LOAD_EVENT_SUCCESS',
        }


    }
}

export default actiontypes