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