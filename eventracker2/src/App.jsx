
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import Navbar from './components/Navbar'
import { getEvents } from './store/actions/eventsAction';
import Views from './Views/Views';

function App() {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])



return (

    <div className="App">
      <Navbar title="Event Tracker" />
        <div className="container">
           <Views />
        </div>
    </div>

  );
}
export default App;