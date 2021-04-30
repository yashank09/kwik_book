const FlightDateInput = ({ inputDateFrom, inputDateTo, inputReturnFrom, inputReturnTo, setInputDateFrom, setinputDateTo, setInputReturnFrom, setInputReturnTo }) => {
  return (
    <div>
      <label>Flexible Leaving Dates</label>
      <div>
        <input className='inputDate' type='date' value={inputDateFrom} onChange={(e) => setInputDateFrom(e.target.value)} min={new Date().toISOString().slice(0, 10)} />
        <input type='date' className='inputDate' value={inputDateTo} onChange={(e) => setinputDateTo(e.target.value)} min={inputDateFrom} />
      </div>

      <label>Flexible Return Dates</label>
      <div>
        <input type='date' value={inputReturnFrom} className='inputDate' onChange={(e) => setInputReturnFrom(e.target.value)} min={inputDateTo} />
        <input type='date' value={inputReturnTo} className='inputDate' onChange={(e) => setInputReturnTo(e.target.value)} min={inputReturnFrom} />
      </div>
    </div>
  );
};

export default FlightDateInput;
