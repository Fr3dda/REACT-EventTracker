import React from 'react'

import { Link } from 'react-router-dom'



const Event = ( { event }) => {
  const date = new Date(event.day)
  function leading0 (date)
  { 
    return (date.getMinutes() < 10 ? "0": "") + date.getMinutes();
  }



  return (
    <Link className='event' to={`/events/${event.id}`}>
      <div className='event-container'>
        <h3>{ event.title }</h3>
        <p>{ event.body} </p>
        <div className='p-date'>

          <p>{ date.toLocaleDateString() }  </p>
          <p>{ date.getHours() }:{ leading0(date) }  </p>
        </div>
      </div>
</Link>
  )
}

export default Event