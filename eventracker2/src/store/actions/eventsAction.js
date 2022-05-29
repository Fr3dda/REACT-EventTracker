import axios from 'axios'

import actiontypes from "../actiontypes"



export const getEvents = () => {
    return async (dispatch) => {
        dispatch(loading(true))
        try{
            const res = await axios.get('http://localhost:5000/posts')
            dispatch(setEvents(res.data))
        }
        catch(err) {
            dispatch(eventsFailure(err.message))
        }

    }
 }

 export const addEvent = (event) => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.post('http://localhost:5000/posts', event)
            dispatch(addToList(res.data))
            
        }
        catch(err) {
            dispatch(eventsFailure(err.message))
        }
    }
}

/* export const deleteEvent = (id) => {
    return async dispatch => {
        dispatch(loading(true))

           const res = await axios.delete(`http://localhost:5000/events/${id}`, {
                method: "DELETE_EVENT",
            })

            res.status !== 200
            ? setEvents(events.filter((event) => event.id !== id))
            : alert('Error deleting this event')
        }
    
} */


const addToList = (event) => {
    return {
        type: actiontypes().events.addNewEvent,
        payload: event

   }
}


 const loading = () => {
     return {
        type: actiontypes().events.loading
    }
 }

 const setEvents = (events) => {
    return {
        type: actiontypes().events.setEvents,
        payload: events
    }
 }


 
 const eventsFailure = (payload) => {
    return {
      type: actiontypes().events.failure,
      payload
    }
  }

