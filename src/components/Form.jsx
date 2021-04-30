import { useState } from 'react';
import PortFromSuggestion from '../screens/PortFromSuggestion';
import PortToSuggestion from '../screens/PortToSuggestion';
import FlightDateInput from '../screens/FlightDateInput';

const Form = ({ portFromOptions, portToOptions, getFlightsData, getSuggestions }) => {
  const [portFromId, setPortFromId] = useState('');
  const [portToId, setPortToId] = useState('');

  const todayDate = new Date().toISOString().slice(0, 10);
  const [inputDateFrom, setInputDateFrom] = useState(todayDate);
  const [inputDateTo, setinputDateTo] = useState(todayDate);
  const [inputReturnFrom, setInputReturnFrom] = useState('2021-05-15');
  const [inputReturnTo, setInputReturnTo] = useState('2021-05-15');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getFlightsData(portFromId, portToId, inputDateFrom, inputDateTo, inputReturnFrom, inputReturnTo);
      }}
    >
      <PortFromSuggestion getSuggestions={getSuggestions} options={portFromOptions} portFromId={portFromId} setPortFromId={setPortFromId} />
      <PortToSuggestion getSuggestions={getSuggestions} options={portToOptions} portToId={portToId} setPortToId={setPortToId} />
      <FlightDateInput
        inputDateFrom={inputDateFrom}
        inputDateTo={inputDateTo}
        inputReturnFrom={inputReturnFrom}
        inputReturnTo={inputReturnTo}
        setInputDateFrom={setInputDateFrom}
        setinputDateTo={setinputDateTo}
        setInputReturnFrom={setInputReturnFrom}
        setInputReturnTo={setInputReturnTo}
      />
      <button>Get Flights</button>
    </form>
  );
};

export default Form;
