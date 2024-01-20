import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Cliente } from '../models/Cliente';
import '../css/ListarClientes.css'



function ListarClientes() {

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await api.get(`/clientes?nome=${nome}&email=${email}&telefone=${telefone}`);
      setClientes(response.data);
    } catch (error) {
      console.error('Erro na pesquisa:', error);
    }
  };

  return (
    <div>
      <h2>Clientes</h2>
      <div className="search-container">
        <div className="search-fields">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      <div style={{ padding: 15 }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarClientes;