import { useEffect, useState } from 'react'
import { addEvent } from '../store/actions/eventsAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const CreateView = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const loading = useSelector(state => state.events.loading)
const [addedEvent, setAddedEvent] = useState(false)




  const [formData, setFormData] = useState({
    title: '',
    body: '',
    day: '',
    reminder: false
  })



  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)

      if(!formData.title) {
        alert('Please create an event!')
        return
      }
      if(!formData.day) {
        alert('Please set a date.')
        return
      }
      if(!formData.body) {
        alert('Describe the event')
        return
      }



    dispatch(addEvent(formData))
    setAddedEvent(true)
  }
  useEffect(() => {
    if(!loading && addedEvent) {
      navigate('/')
    }
  }, [loading, addedEvent, navigate])

  return (

  <div className='create-post'>
    <form onSubmit={handleSubmit} className='add-form'>

      <div className="form-control">
        <div className='event-control'>
            <input name='title' value={formData.title} onChange={onChange} className='event-input' type="text" placeholder='Add event' />

        </div>
        <div className='event-control'>
            <textarea name='body' value={formData.body} onChange={onChange} className='event-input' type="text" placeholder='Describe the event' cols="30" rows="5" />

        </div>

        <div className='day-control'>
            <input name='day' type="datetime-local" value={formData.day} onChange={onChange} className='day-input'  placeholder='Add Day & Time' />
        </div>

        <div className='reminder-control'>
            <label> Set Reminder </label>
            <input  type="checkbox"
                    value={formData.reminder} 
                    onChange={onChange} 
                    />
                    
        </div>
      </div>

        <button type='submit' className='btn-submit'>Save Event</button>
    </form>
  </div>

)
}

export default CreateView