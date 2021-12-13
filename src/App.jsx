import { useState } from 'react';
//import Input from './Input';
//import Counter from './Counter';
//import Toggle from './Toggle';
import Styling from './Styling';
import './App.css';

const App = () => {
  // const [name, setName] = useState('fred');
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState('a@b.com');

  // const handleChange = () => {
  //   setName('harry');
  //   setAge(20);
  //   setEmail('a@c.com');
  // };

  return (
    <main>
      <h1>Welcome to React</h1>
      {/* <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <button onClick={handleChange}>change all</button>
      <Input /> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      <Styling />
    </main>
  );
};

export default App;
