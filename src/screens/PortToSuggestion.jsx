const PortToSuggestion = ({ portToId, setPortToId, getSuggestions, options }) => {
  const updateValue = (port, label) => {
    setPortToId(port);
    getSuggestions(port, label);
  };

  return (
    <>
      <input
        placeholder='Travelling To'
        className='inputPort'
        list='portsTo'
        name='inputTo'
        value={portToId}
        onChange={(e) => updateValue(e.target.value, e.target.name)}
        onSelect={(e) => setPortToId(e.target.value)}
      />
      {/* option shows either the 'label' or the 'value' based on browser implementation. On chrome, it shows the id not the label */}
      <datalist id='portsTo'>
        {options.map((port, index) => (
          <option key={index} value={port.id} label={port.name} />
        ))}
      </datalist>
    </>
  );
};

export default PortToSuggestion;
