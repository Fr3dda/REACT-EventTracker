import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../store/actions/postsAction'
import React from 'react'
import '../App.css'
import EventCard from '../components/EventCard'

const EventsView = () => {

  const dispatch = useDispatch()
  const { data, loading } = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [])

  return (
    <div className='event-view'>
      <div className="event-view-container">
        <div className='event-view-text'>
          <h1 className='event-view-header'> Events</h1>
          <p className='event-view-date'>Your future events...</p>
        </div>
          <div className="event-view-grid">
            <EventCard />

            

        </div>

      </div>
    </div>
  )
}

export default EventsView