import React, { useState } from 'react'
import { addEvent } from '../store/actions/events.action'
import { useDispatch  } from 'react-redux'
const CreateEvent = () => {

const dispatch = useDispatch()


  const [ setAddedEvent ] = useState(false)


  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(addEvent(formData))
    setAddedEvent(true)
  }

  const onChange = e =>{
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }



  return (
    <form onSubmit={handleSubmit} className='add-form'>

      <div className="form-control">
        <div className='event-control'>
            <input onChange={onChange} value={formData.title} className='event-input' type="text" placeholder='Add event' />
        </div>

        <div className='day-control'>
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