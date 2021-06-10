import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div>
      <p>Login Form</p>

      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};

export default LoginForm;
