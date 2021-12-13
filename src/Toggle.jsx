import { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {}
      {toggle && <h1>This is some text</h1>}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
    </div>
  );
};

export default Toggle;
