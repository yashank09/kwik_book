import { debounce } from 'debounce';

const baseUrl = 'https://api.skypicker.com';

export const getPortLocation = debounce(async (location) => {
  let portsResult = await fetch(`${baseUrl}/locations?term=${location}&location_types=airport`)
    .then((response) => response.json())
    .then((ports) =>
      ports.locations.map(({ city, name }) => {
        return { id: city.id, name: name };
      })
    )
    .catch((error) => error);
  return portsResult;
}, 300);

export const getFlights = async (portFromId, portToId, inputFromDate = '2021-05-15', inputToDate = '2021-05-15', inputReturnFrom = '2021-06-01', inputReturnTo = '2021-06-01') => {
  return await fetch(
    `${baseUrl}/flights?v=3&partner=skypicker&locale=en&flyFrom=${portFromId}&to=${portToId}&dateFrom=${inputFromDate}&dateTo=${inputToDate}&typeFlight=return&returnFrom=${inputReturnFrom}&returnTo=${inputReturnTo}`
  )
    .then((response) => response.json())
    .then((flights) => flights.data)
    .catch((error) => window.alert('something went wrong: ', error));
};
