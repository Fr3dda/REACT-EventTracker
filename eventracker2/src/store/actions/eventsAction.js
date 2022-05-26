import axios from 'axios'
import actiontypes from "../actiontypes"

export const getEvents = () => {
    return async (dispatch) => {
        dispatch(loading(true))
        try{
            const res = await axios.get('http://localhost:3000/events/')
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
            const res = await axios.event('http://localhost:3000/events/', event)
            dispatch(addToList(res.data))
            
        }
        catch(err) {
            dispatch(eventsFailure(err.message))
        }
    }
}

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