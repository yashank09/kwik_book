const FlightCard = ({ flights }) => {
  return (
    <>
      {!flights.lenght && <h2 className='noFlights'>No flights due to Travel Restrictions! Check in later & stay safe!</h2>}
      {flights.lenght > 0 &&
        flights.map((flight, index) => (
          <div key={index}>
            <h2>Flight Duration: {flight.duration}</h2>
            <h2>Flight From: {flight.flyFrom}</h2>
            <h2>Flight To: {flight.flyTo}</h2>
            <h2>Flight Airline: {flight.airlines}</h2>
            <h2>Flight Price: {flight.price}</h2>
          </div>
        ))}
    </>
  );
};

export default FlightCard;
