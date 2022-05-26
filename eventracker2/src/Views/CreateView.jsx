import React, { useState } from 'react'
import { addEvent } from '../store/actions/eventsAction'
import { useDispatch  } from 'react-redux'


const CreateView = () => {

const dispatch = useDispatch()


 


  const [formData, setFormData] = useState({
    title: '',
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
  }



  return (

  <div className='create-post'>
    <form onSubmit={handleSubmit} className='add-form'>

      <div className="form-control">
        <div className='event-control'>
            <input name='title' value={formData.text} onChange={onChange} className='event-input' type="text" placeholder='Add event' />
        </div>

        <div className='day-control'>
            <input name='day' value={formData.day} onChange={onChange} className='day-input'  placeholder='Add Day & Time' />
        </div>

        <div className='reminder-control'>
            <label> Set Reminder </label>
            <input  type="checkbox" />
        </div>
      </div>

        <button className='btn-submit'>Save Event</button>
    </form>
  </div>

)
}

export default CreateView