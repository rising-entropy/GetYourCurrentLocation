import './App.css';
import {useState, useEffect} from 'react'

function App() {

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [locationState, setLocationState] = useState([]);

  //getting location
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
  }, error, {enableHighAccuracy: true, maximumAge: 0})

  //check if allow location is blocked
  useEffect( () => {
  navigator.permissions.query({
    name: 'geolocation'
  }).then((result) => {
      setLocationState(result.state)
  });}, [locationState])

  useEffect( () => {
    navigator.permissions.query({
      name: 'geolocation'
    }).then((result) => {
        setLocationState(result.state)
    });}, [])

  return (
    <div className="App" style={{backgroundColor: '#FFC947', width: '100%', height: '100%', margin: '0'}}>
      <h1 style={{color: '#23049D'}}>Getting Super-Accurate Current Geo Cordinates</h1>
      <h2 style={{color: '#28527A'}}>Latitude: {lat}</h2> 
      <h2 style={{color: '#28527A'}}>Longitude: {long}</h2> 
      <br/>
      <h2 style={{color: '#28527A'}}>Location State: {locationState}</h2> 
    </div>
  );
}

export default App;
