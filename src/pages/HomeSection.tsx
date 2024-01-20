import React from 'react';
import logo from '../assets/logofacilita.png';
import '../css/HomeSection.css'

function HomeSection() {
  return (
    <div className='container'>
      <img src={logo} alt="Logo Facilita Jurídico" className='logo' />
      <h1 className='title'>Facilita Jurídico</h1>
      <p className='description'>
        O projeto Facilita Jurídico é uma solução de gerenciamento de clientes
        desenvolvida para otimizar as rotas de visitas, visando reduzir custos
        e economizar tempo. O sistema permite o cadastro de clientes e utiliza
        algoritmo para calcular a menor rota possível, baseando-se em informações
        geográficas.
      </p>
    </div>
  );
}

export default HomeSection;
