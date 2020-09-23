import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../forms/Button';
import Input from '../forms/Input';
import useForm from '../../Hooks/useForm';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.validate() && !password.validate()) {
      return;
    }

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    }).then((res) => console.log(res));
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
}
