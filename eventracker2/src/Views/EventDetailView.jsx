import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEventById } from '../store/actions/eventAction'
import { useParams } from 'react-router-dom'



const EventDetailView = (  ) => {


  const dispatch = useDispatch()
  const { id } = useParams()
  const { loading, data: event } = useSelector(state => state.event)

  const date = new Date(event.day)
  function leading0 (date)
  { 
    return (date.getMinutes() < 10 ? "0": "") + date.getMinutes();
  }


  useEffect(() => {
    dispatch(getEventById(id))
  
}, [dispatch, id])




const template = ( event &&
  <div className='detail-container'>
    <h2>{event.title}</h2>
    <p>{event.body}</p>
    <div className='detail-date'>
      <p>{ date.toLocaleDateString() }</p>
      <p>{ date.getHours() }:{ leading0(date) }</p>
    </div>
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