import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Message, ImageSuccess } from './styles';

import successImg from '../../images/success.svg';

const SuccessCreateOrphanage: React.FC = () => {
  return (
    <Container>
      <Message>
        <h1>Ebaaa!</h1>
        <h3>
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar :)
        </h3>
        <Link to="home"> Voltar para o mapa </Link>
      </Message>

      <ImageSuccess>
        <img src={successImg} alt="Sucesso" />
      </ImageSuccess>
    </Container>
  );
};

export default SuccessCreateOrphanage;
