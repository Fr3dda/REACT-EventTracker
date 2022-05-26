

const actiontypes = () => {
    return {
        events: {
            setEvents: 'SET_EVENTS',
            loading: 'LOADING',
            failure: 'EVENT_FAILURE',
            addNewEvent: 'ADD_NEW_EVENT'
        },
        event: {
            loadEvent: 'LOAD_EVENT',
            loadEventSuccess: 'LOAD_EVENT_SUCCESS',
            loadEventFailure: 'LOAD_EVENT_FAILURE',
        }


    }
}

export default actiontypes