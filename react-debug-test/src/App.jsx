import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      <div className='container'>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)} style={{marginBottom: '12px'}}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
      </div>
    </div>
  );
}

export default App;
