import axios from 'axios'
import actiontypes from "../actionTypes"

export const getEvents = () => {
    return async (dispatch) => {
        dispatch(loading(true))
        const res = await axios.get('http://localhost:3000/events')
        if(res.status === 200) {
            dispatch(setEvents(res.data))
        }
    }
 }

 export const addEvent = (event) => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.event('http://localhost:3000/events', event)
            dispatch(addToList(res.data))
        }
        catch(err) {
            dispatch(eventsFailure(err.message))
        }
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

 const addToList = (event) => {
     return {
         type: actiontypes().events.addNewEvent,
         payload: event

    }
 }
 
 const eventsFailure = (payload) => {
    return {
      type: actiontypes().events.failure,
      payload
    }
  }