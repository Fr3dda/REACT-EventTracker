import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePostView from './CreatePostView'
import EventsView from './EventsView'
const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <EventsView /> } />
        <Route path='/create' element={ <CreatePostView /> } />
    </Routes>
  )
}

export default Views