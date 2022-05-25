import React from 'react'
import Button from './Button'
import Events from './Events'




const EventContainer = () => {
  const onClick = () => {
    console.log("click")
  }


  return (
    <div>
      <div className='header'>
        <h1>Glömt något...?</h1>
        <Button onClick={onClick} />
      </div>
      <div>
        <Events />
      </div>

    </div>
  )
}

export default EventContainer