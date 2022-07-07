import { useState } from 'react';
import { Controles } from './components/controles';
import { Demonstrador } from './components/demonstrador';
import './index.css';

export const App = () => {

  // obtem um valor previamente que estiver salvo no banco, caso nao ele seta o valor como 10
  const initialState = localStorage.getItem("count") || 10
  // cria variavel de estado
  let [count, setCount] = useState(initialState)

  return (
    <div className="container">
      <Demonstrador value={count} />
      <Controles count={count} setCount={setCount} />
    </div>
  );

}
