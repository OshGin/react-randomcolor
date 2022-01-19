import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(0);
  return (
    <div
      style={{
        backgroundColor: randomColor(),
        width: 'auto',
        height: 'auto',
      }}
    >
      Hello {randomColor()}!
      <div>
        <button onClick={() => setColor(randomColor())}>
          Creat a new background!
        </button>
      </div>
    </div>
  );
}

export default App;
