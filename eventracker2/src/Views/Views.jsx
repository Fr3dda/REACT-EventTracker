import React from 'react'
import { Routes, Route } from 'react-router-dom'

import EventView from './EventView'
import CreateView  from './CreateView'
import EventDetailView from './EventDetailView'

const Views = () => {
  return (
    <Routes >
        <Route path='/' element={ <EventView /> } />
        <Route path='/create' element={ <CreateView /> } />
        <Route path='/event/:id' element={ <EventDetailView /> } />
    </Routes>
  )
}

export default Views