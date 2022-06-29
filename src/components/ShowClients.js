import React ,{useEffect, useState} from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/'

const ShowClients = () => {
    const [clientes, setClientes] = useState([])   

    useEffect ( () =>{
        getAllClients();
    },[])

    const getAllClients = async ()=>{
        const response  = await axios.get(`${endpoint}/clientes`)
        setClientes(response)
    }

    const deleteClient = async (id)=>{
        await axios.delete(`${endpoint}/cliente/${id}`)
        getAllClients()
    }

  return (
    <div>
        <div className='d-grid grap-2'>
            <link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                        <td>{cliente.name}</td>
                        <td>{cliente.cellphone}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.address}</td>
                        <td>
                            <link to={`/edit/${cliente.id}`} className='btn btn-warning'>Editar</link>
                            <button onClick={ () => deleteClient(cliente.id)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowClients;
