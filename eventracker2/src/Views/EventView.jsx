import React from 'react'
import Event from '../components/Event'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getEvents } from '../store/actions/eventsAction'

const EventView = () => {

  const dispatch = useDispatch()

// DELETE EVENT





  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])
 
 const { data: events } = useSelector(state => state.events)
  
  return (
    <div>
      <h2> Glömt något...?</h2>
        <div>
          {events.map((event, index) =><Event 
                                key={index}
                                event={event}
                                 /> )}
        </div>
    </div>
  )
}

export default EventView