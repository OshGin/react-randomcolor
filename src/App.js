import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(0);
  const colorRandom = randomColor();
  return (
    <div
      style={{
        backgroundColor: randomColor(),
        width: 'auto',
        height: 'auto',
      }}
    >
      Hello!
      <div>
        <button onClick={() => setColor(color === 'green' ? 'red' : 'green')}>
          Creat a new background!
        </button>
      </div>
    </div>
  );
}

export default App;
