import { useState } from 'react';

const Input = () => {
  const [name, setName] = useState('');

  const changeHandler = (e) => {
    document.title = e.target.value;
    setName(e.target.value);
  };

  return (
    <div>
      <h2>{name}</h2>
      <input type='text' value={name} onChange={changeHandler} />
    </div>
  );
};

export default Input;
