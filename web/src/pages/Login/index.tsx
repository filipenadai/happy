import React from 'react';

import { Container, Branding, Logon } from './styles';

import logoImg from '../../images/logo-login.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Login: React.FC = () => {
  return (
    <Container>
      <Branding>
        <img src={logoImg} alt="Happy"/>
        <strong>Rio Claro</strong>
        <p>São Paulo</p>
      </Branding>
      <Logon>
        <div>
          <h1>Fazer login</h1>

          <input
            placeholder="Nome"
            id="name"
            // value={name}
            // onChange={event => setName(event.target.value)}
          />
          <input
            placeholder="Senha"
            id="password"
            // value={name}
            // onChange={event => setName(event.target.value)}
          />
          <div>
            <label>
              Lembrar-me
              <input type="checkbox" name="memory"/>
            </label>

            <a href="/">
              Esqueci minha senha!
            </a>
          </div>
        </div>
      </Logon>

      <Link to='/'>
        <FiArrowLeft size={20} color="#29b6d1" />
      </Link>
    </Container>
  );
}

export default Login;
