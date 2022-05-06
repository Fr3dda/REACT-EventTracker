import './App.css';
import Navbar from './components/Navbar';
import Views from './Views/Views';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Views />
      </div>
    </div>
  );
}

export default App;
