import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import ShowClients from './components/ShowClients'
import EditCliente from './components/EditClient'
import CreateClient from './components/CreateClient'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowClients/>} />
          <Route path='/create' element={<CreateClient/>} />
          <Route path='/edit/:id' element={<EditCliente/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
