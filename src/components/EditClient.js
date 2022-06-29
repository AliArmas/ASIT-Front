import axios from "axios";
import React, {useEffect,useState}from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/cliente'

const EditClient = () => {
    const [cellphone, setCellphone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();   
    
    const update = async  (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`,{
            cellphone:cellphone,
            email:email,
            address:address
        })
        navigate('/')

    }

    useEffect( () =>{
        const getClienteById = async () =>{
            const response = await axios.get(`${endpoint}/${id}`)
            setCellphone(response.data.cellphone)
            setEmail(response.data.email)
            setAddress(response.data.address)
        }
        getClienteById()
    }, [])  

    return (
        <div>
        <h3>Editar un cliente</h3>
        <form onSubmit={update}>
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
            <button type="submit" className='btn btn-warning btn-lg'>Editar</button>
        </form>
    </div>
    )
}

export default EditClient;
