import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePostView from './CreatePostView'
import EventsDetailsView from './EventsDetailsView'
import EventsView from './EventsView'
const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <EventsView /> } />
        <Route path='/events' element={ <EventsView /> } />
        <Route path='/events/:id' element={ <EventsDetailsView /> } />
        <Route path='/create' element={ <CreatePostView /> } />
    </Routes>
  )
}

export default Views