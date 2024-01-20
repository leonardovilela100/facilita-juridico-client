import { useEffect, useState } from 'react';
import { Cliente } from '../models/Cliente';
import { api } from '../services/api';

function ListaRotaClientes() {

  const [clientes, setClientes] = useState<Cliente[]>([]);

  var dataHoje = new Date().getDate()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/clientesRota');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h2>Rota de visita -  Dia {dataHoje}</h2>
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
  )
}

export default ListaRotaClientes;