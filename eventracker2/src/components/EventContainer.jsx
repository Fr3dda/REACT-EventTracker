import React from 'react'
import Button from './Button'
import Events from './Events'
 



const EventContainer = () => {
  return (
    <div>
      <div className='header'>
        <h1>Glömt något...?</h1>
        <Button />
      </div>
      <div>
        <Events />
      </div>

    </div>
  )
}

export default EventContainer