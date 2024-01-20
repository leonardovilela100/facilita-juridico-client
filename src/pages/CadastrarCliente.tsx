import { useState } from 'react';
import { api } from '../services/api';
import '../css/CadastroCliente.css'
import FloatingAlert, { HandleActionFunction } from '../components/FloatingAlert/FloatingAlert';
import HelperText from '../components/HelperText/HelperText';;


function CadastrarCliente() {
  const [buttonInfo, setButtonInfo] = useState({
    type: 0,
    title: '',
    action: false
  })

  const { type, title, action } = buttonInfo;

  const handleAction: HandleActionFunction = (type, title, action) => {
    setButtonInfo({
      type,
      title,
      action
    });
  };


  const hasErrorsNome = () => {
    return cliente.nome.length < 1;
  };

  const [nomeFocused, setNomeFocused] = useState(false);



  const hasErrorsEmail = () => {
    return cliente.email.length < 1;
  };

  const [emailFocused, setEmailFocused] = useState(false);

  const hasErrorsTelefone = () => {
    return cliente.telefone.length < 1;
  };

  const [telefoneFocused, setTelefoneFocused] = useState(false);

  const hasErrorsCep = () => {
    return cliente.cep.length < 1;
  };

  const [cepFocused, setCepFocused] = useState(false);



  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
  });

  const handleChange = (e: any) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: any) => {


    e.preventDefault();

    try {
      const response = await api.post('/clientes', cliente);
      console.log(response.data);
      handleAction(1, 'Cliente cadastrado com sucesso!', true)
      setTimeout(() => { handleAction(1, 'Cliente cadastrado com sucesso!', false) }, 5000)
      setTimeout(() => {
        setCliente({
          nome: '',
          email: '',
          telefone: '',
          cep: '',
        });
        setNomeFocused(false)
        setCepFocused(false)
        setEmailFocused(false)
        setTelefoneFocused(false)
      }, 5000)
    } catch (error) {
      if (!cliente.nome) {
        handleAction(3, 'Informe o nome do cliente', true)
        setTimeout(() => { handleAction(3, 'Informe o nome do cliente', false) }, 5000)
        return
      }

      if (!cliente.email) {
        handleAction(3, 'Informe o e-mail do cliente', true)
        setTimeout(() => { handleAction(3, 'Informe o e-mail do cliente', false) }, 5000)
        return
      }

      if (!cliente.telefone) {
        handleAction(3, 'Informe o telefone do cliente', true)
        setTimeout(() => { handleAction(3, 'Informe o telefone do cliente', false) }, 5000)
        return
      }

      if (!cliente.cep) {
        handleAction(3, 'Informe o cep do cliente', true)
        setTimeout(() => { handleAction(3, 'Informe o cep do cliente', false) }, 5000)
        return
      }
      handleAction(4, 'Houve um erro ao cadastrar o cliente', true)
      setTimeout(() => { handleAction(4, 'Houve um erro ao cadastrar o cliente', false) }, 5000)
      console.error('Houve um erro ao cadastrar o cliente:', error);
    }
  };


  return (
    <div>
      <h2>Cadastre seu Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            onBlur={() => {
              if (!nomeFocused) {
                setNomeFocused(true);
              }
            }}
          />
        </div>
        <HelperText visible={nomeFocused && hasErrorsNome()} description='Digite o nome do Cliente'></HelperText>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            onBlur={() => {
              if (!emailFocused) {
                setEmailFocused(true);
              }
            }}
          />
        </div>
        <HelperText visible={emailFocused && hasErrorsEmail()} description='Digite o email do Cliente'></HelperText>

        <div>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
            onBlur={() => {
              if (!telefoneFocused) {
                setTelefoneFocused(true);
              }
            }}
          />
        </div>
        <HelperText visible={telefoneFocused && hasErrorsTelefone()} description='Digite o telefone do Cliente'></HelperText>

        <div>
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={cliente.cep}
            onChange={handleChange}
            onBlur={() => {
              if (!cepFocused) {
                setCepFocused(true);
              }
            }}
          />
        </div>
        <HelperText visible={cepFocused && hasErrorsCep()} description='Digite o CEP do Cliente'></HelperText>
        <FloatingAlert type={type} title={title} action={action} />
        <button type="submit">Cadastrar</button>
      
      </form>

    </div>
  );
}

export default CadastrarCliente;