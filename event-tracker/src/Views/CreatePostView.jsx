import React from 'react'




const handleSubmit = e => {
    e.preventDefault()
}


const CreatePostView = () => {
  return (
    <div className='create-post'>
        <h2>Create new Event</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name='title'
            placeholder=' e.g. : Buy bike...' 
            className='form-control' />
            <textarea name="body" placeholder="please enter a description..." cols="30" rows="10"></textarea>
            <button className='btn'> Add event</button>
        </form>   
        <form action=""> </form>

    </div>
    
  )
}

export default CreatePostView