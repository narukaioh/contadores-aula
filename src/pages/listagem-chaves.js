import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const KeyList = () => {

  const [data, setData] = useState({ conta: "", agencia: "" })
  const [keys, setKeys] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleClick = () => {
    // pegar os valores
    const params = new URLSearchParams(data).toString()
    // montar a request
    axios.get(`http://localhost:9000/pixkey?${params}`).then(response => {
      // passar resposta para a variavel keys
      setKeys(response.data.pop().chaves)
    })
  }

  return (
    <div className='container'>

      <form className="form">
        <input placeholder="Conta:" name="conta" onChange={handleChange} />
        <input placeholder="Agencia:" name="agencia" onChange={handleChange} />
        <button type='button' onClick={handleClick}>Enviar</button>
      </form>

      <ul className='list-key-component'>
        {keys.map((key, index) =>
          <li key={index}>
            <Link to={`/form/${key.value}`}>{key.value}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}