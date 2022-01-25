import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [, setColor] = useState(null);
  return (
    <div
      style={{
        backgroundColor: randomColor(),
        width: 'auto',
        height: 'auto',
      }}
    >
      Generated Color: {randomColor()}
      <div>
        <button onClick={() => setColor(randomColor())}>Generate</button>
      </div>
    </div>
  );
}

export default App;
