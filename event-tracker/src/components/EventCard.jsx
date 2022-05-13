import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const EventCard = ( { event }) => {
  return (
    <Link className='event' to={`/post/${event}`}>
        <div className='event-card'>
          <div className='event-text'>

            <h2>Gå till läkaren</h2>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.... </small>
            <p>02/03/22</p>
          </div>
          <div className="event-btn">
            <button className='clear-btn'> X </button>
          </div>
        </div>
    </Link>
  )
}

export default EventCard