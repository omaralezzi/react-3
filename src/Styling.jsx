import { useState } from 'react';
import { styleOne, styleTwo } from './styles';

const Styling = () => {
  const [change, setChange] = useState(false);

  return (
    <div>
      <h1 style={change ? styleOne : styleTwo}>Styling</h1>
      <button
        style={{
          width: '200px',
          height: '40px',
          border: 'none',
          outline: 'none',
          fontSize: '1.3rem',
          padding: '10px',
          backgroundColor: 'lightblue',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={() => setChange(!change)}>
        change Style
      </button>
    </div>
  );
};

export default Styling;
