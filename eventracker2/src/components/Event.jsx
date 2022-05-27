import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Event = ( { event }) => {

 



  return (
    <Link className='event' to={`/events/${event.id}`}>
      <div>
        <h3>{ event.title }</h3>
        <p>{ event.day }  </p>
      </div>

      <button  className='btn-remove'>
        <FaTimes  />
      </button>
    </Link>
  )
}

export default Event