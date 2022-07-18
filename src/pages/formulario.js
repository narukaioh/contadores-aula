
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Form = () => {

    const { key } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({ key, valor: '', descricao: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleClick = () => {
        const params = new URLSearchParams(data).toString()
        axios.get(`http://localhost:9050/qrcode?${params}`).then(response => {
            const { qrcode } = response.data
            navigate(`/qrcode/${qrcode}`)
        })
    }

    return (
        <div className='container'>
            <form className='form'>
                <input name="valor" onChange={handleChange} placeholder='R$' />
                <input name="descricao" onChange={handleChange} placeholder='Descrição' />
                <button type='button' onClick={handleClick}>Enviar</button>
            </form>
        </div>
    )
}