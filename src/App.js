import React from 'react';
import './App.css';

const App = () => {
  const [inputName, setInputName] = React.useState('');
  const [names, setNames] = React.useState([]);

  const onInputChange = (event) => {
    const value = event.target.value;
    setInputName(value);
  };

  const onAddName = (event) => {
    if (inputName === undefined) {
      return;
    }

    const uniqueNames = new Set([...names, inputName]);

    setNames(Array.from(uniqueNames));
    setInputName('');
  };

  return (
    <div className="App">

    <input value={inputName} onChange={onInputChange} />
    <button onClick={onAddName}>Add name</button>

      <ul>
      {names.map(name => (
        <li>
          {name}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
