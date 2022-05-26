import React, { useState } from 'react'
import { addEvent } from '../store/actions/events.action'
import { useDispatch  } from 'react-redux'


const CreateEvent = () => {

const dispatch = useDispatch()


  const [  setAddedEvent ] = useState(false)


  const [formData, setFormData] = useState({
    text: '',
    day: ''
  })



  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()


    dispatch(addEvent(formData))
    setAddedEvent(true)
  }

  return (
    <form onSubmit={handleSubmit} className='add-form'>

      <div className="form-control">
        <div className='event-control'>
            <input name='text' value={formData.text} onChange={onChange} className='event-input' type="text" placeholder='Add event' />
        </div>

        <div className='day-control'>
            <input name='day' value={formData.day} onChange={onChange} className='day-input' type="text" placeholder='Add Day & Time' />
        </div>

        <div className='reminder-control'>
            <label> Set Reminder </label>
            <input  type="checkbox" />
        </div>
      </div>

        <button className='btn-submit' type="submit" >
          <h1 className='btn-text'>Save Event</h1>
        </button>

    </form>

)
}

export default CreateEvent