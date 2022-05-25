import React from 'react'
import { addEvent } from '../store/actions/event.action'

const CreateEvent = () => {
  return (
    <form className='add-form'>
      <div className="form-control">
        <div className='event-control'>
{/*             <label className='event-name'> Event </label> */}
            <input className='event-input' type="text" placeholder='Add event' />
        </div>
        <div className='day-control'>
{/*             <label> Day & Time </label> */}
            <input className='day-input' type="text" placeholder='Add Day & Time' />
        </div>
        <div className='reminder-control'>
            <label> Set Reminder </label>
            <input  type="checkbox" />
        </div>

      </div>

        <button className='btn-submit' type="submit" onClick={addEvent}>
          <h1 className='btn-text'>Save Event</h1>
        </button>
    </form>
  )
}

export default CreateEvent