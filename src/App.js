import { useState } from 'react';
import { Controles } from './components/controles';
import { Demonstrador } from './components/demonstrador';
import './index.css';

export const App = () => {

  const initialState = localStorage.getItem("count") || 10
  let [count, setCount] = useState(initialState)

  return (
    <div className="container">
      <Demonstrador value={count} />
      <Controles count={count} setCount={setCount} />
    </div>
  );

}
