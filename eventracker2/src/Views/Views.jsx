import React from 'react'
import { Routes, Route } from 'react-router-dom'

import EventView from './EventView'
import CreateView  from './CreateView'
import EventDetailView from './EventDetailView'



const Views = () => {

  const deleteEvent = async (id) => {
    await fetch(`http://localhost:5000/events/${id}`, {
      method: 'DELETE_EVENT',
    })
  }



  return (
    <Routes >
        <Route path='/' element={ <EventView  onDelete={deleteEvent}  /> } />
        <Route path='/create' element={ <CreateView  /> } />
        <Route path='/events/:id' element={ <EventDetailView /> } />
    </Routes>
  )
}

export default Views