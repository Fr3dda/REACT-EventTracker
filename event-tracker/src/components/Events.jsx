import React from 'react'
import { Link } from 'react-router-dom'

const Event = ( { event }) => {
  return (
    <Link className='event' to={`/post/${event.id}`}>
        <h2>Gå till läkaren</h2>
        <p>Lorem ipsum dolor sit amet.</p>
    </Link>
  )
}

export default Event