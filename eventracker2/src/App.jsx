import './App.css'
import Navbar from './components/Navbar'
import Views from './Views/Views';


/* import { getEvents } from './store/actions/events.action'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react' */



function App() {







  return (

    <div className="App">
      <Navbar title="Event Tracker" />
        <div className="container">
           <Views />
        </div>
    </div>


  )
}
export default App;