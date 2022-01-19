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
      Generated Color: {randomColor()}git
      <div>
        <button onClick={() => setColor(randomColor())}>Generate</button>
      </div>
    </div>
  );
}

export default App;
