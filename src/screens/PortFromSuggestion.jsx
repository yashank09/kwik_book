const PortFromSuggestion = ({ portFromId, setPortFromId, getSuggestions, options }) => {
  const updateValue = (port, label) => {
    setPortFromId(port);
    getSuggestions(port, label);
  };

  return (
    <>
      <input
        placeholder='Travelling From'
        className='inputPort'
        list='portsFrom'
        name='inputFrom'
        value={portFromId}
        onChange={(e) => updateValue(e.target.value, e.target.name)}
        onSelect={(e) => setPortFromId(e.target.value)}
      />
      <datalist id='portsFrom'>
        {options &&
          options.map((port, index) => (
            <option key={index} value={port.id}>
              {port.name}
            </option>
          ))}
      </datalist>
    </>
  );
};

export default PortFromSuggestion;
