import { useState } from 'react';
import { getPortLocation, getFlights } from './api.js';
import Form from './components/Form.jsx';
import FlightCard from './screens/FlightCard';

import './App.css';

function App() {
  const [flights, setFlights] = useState(undefined);
  const [portFromOptions, setPortFromOptions] = useState([]);
  const [portToOptions, setPortToOptions] = useState([]);

  const getSuggestions = async (port, label) => {
    if (port) {
      if (label === 'inputFrom') {
        let response = await getPortLocation(port);
        setPortFromOptions(response);
      }
      if (label === 'inputTo') {
        let response = await getPortLocation(port);
        setPortToOptions(response);
      }
    } else {
      setPortFromOptions([]);
      setPortToOptions([]);
    }
  };

  const getFlightsData = async (portFromId, portToId, inputDateFrom, inputDateTo, inputReturnFrom, inputReturnTo) => {
    if (portFromId === '' || portToId === '') {
      return window.alert('Please enter location values');
    }
    if ((portFromId, portToId)) {
      let data = await getFlights(portFromId, portToId, inputDateFrom, inputDateTo, inputReturnFrom, inputReturnTo);
      setFlights(data);
    }
  };

  return (
    <div className='App'>
      <h1>Search for the best flights</h1>
      <Form portFromOptions={portFromOptions} portToOptions={portToOptions} setPortToOptions={setPortToOptions} getSuggestions={getSuggestions} getFlightsData={getFlightsData} />
      {flights && <FlightCard flights={flights} />}
    </div>
  );
}

export default App;
