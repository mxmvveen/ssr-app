import React from 'react';

const Home = () => {
  const [inputName, setInputName] = React.useState<string>('');
  const [names, setNames] = React.useState<string[]>([]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setInputName(value);
  };

  const onAddName = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (inputName === undefined) {
      return;
    }

    const uniqueNames: Set<string> = new Set([...names, inputName]);

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
export default Home;