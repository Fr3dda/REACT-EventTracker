import Event from './Event'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getEvents } from '../store/actions/eventsAction'


const Events = () => {
 const dispatch = useDispatch()

 useEffect(() => {
   dispatch(getEvents())
 }, [dispatch])

const { data: events } = useSelector(state => state.events)
    
  return (
    <>
      {events.map((event) => (
        <Event key={event.id}event={event}  />
        ))}
    </>

  )
}

export default Events
