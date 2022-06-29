import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/cliente'

const CreateClient = () => {
    
    const [name, setName] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate();

    
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(endpoint,{name:name,cellphone:cellphone,email:email,address:address}) 
        navigate('/')       
    }



  return (
    <div>
        <h3>Crear un nuevo cliente</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                    type='text'
                    placeholder="user name"
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Telefono</label>
                <input
                    value={cellphone}
                    onChange={ (e) => setCellphone(e.target.value)}
                    type='text'
                    placeholder="962-544-78-78"
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    type='text'
                    placeholder="name@example.com"
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Direccion</label>
                <input
                    value={address}
                    onChange={ (e) => setAddress(e.target.value)}
                    type='text'
                    placeholder=""
                    className='form-control'
                />
            </div>
            <button type="submit" className='btn btn-primary'>Crear</button>
        </form>
    </div>
  )
}

export default CreateClient