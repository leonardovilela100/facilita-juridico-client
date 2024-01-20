import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeSection from './pages/HomeSection';
import CadastrarCliente from './pages/CadastrarCliente';
import ListarClientes from './pages/ListarClientes';
import Modal from './pages/Modal';
import ListaRotaClientes from './pages/ListaRotaClientes';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <a className="navbar-brand" href="/">Facilita Jurídico</a>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cadastrar-cliente">Cadastrar Cliente</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listar-clientes">Listar Clientes</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link reset-button" onClick={handleOpenModal}>Listar Rota</button>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
        <Route path="/listar-clientes" element={<ListarClientes />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ListaRotaClientes />
      </Modal>
    </BrowserRouter>
  );
}

export default App;
