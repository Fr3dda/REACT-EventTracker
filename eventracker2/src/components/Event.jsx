import { FaTimes } from 'react-icons/fa'

const Event = ( { event }) => {
  return (
    <div className='event'>
        <h3>{ event.text } <FaTimes /></h3>
        <p>{ event.day }  </p>
        
    </div>
  )
}

export default Event