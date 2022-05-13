import React, { useState }  from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'




const handleSubmit = e => {
    e.preventDefault()
}


const CreatePostView = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className='create-post'>
      <h2 className='create-post-header'>Create new Event</h2>
        <form className='post-form' onSubmit={handleSubmit}>
          <input type="text"  name='title'  placeholder=' e.g. : Buy bike...'className='form-control' />
          <textarea name="body" placeholder="please enter a description..." cols="30" rows="10"></textarea>
          <div className='date-button'>
          <DatePicker className='date-picker' selected={selectedDate}
                      onChange={date => setSelectedDate(date)}
                      placeholderText="Select a date..." />
            <button className='btn'> Add event</button>
          </div>
        </form>   
    </div>
    
  )
}

export default CreatePostView