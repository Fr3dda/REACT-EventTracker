import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEventById } from '../store/actions/eventAction'
import { useParams } from 'react-router-dom'

const EventDetailView = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getEventById(id))
  
}, [dispatch, id])

const { loading, data: event, error } = useSelector(state => state.event)

const template = ( event &&
  <div>
    <h2>{event.title}</h2>
    <p> {event.day}</p>
  </div>
)



  return (
    <div>
      {template}
      {loading && <p> Loading...</p>}
       </div>
  )
}

export default EventDetailView