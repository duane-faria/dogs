import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../forms/Button';
import Input from '../forms/Input';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import TokenPost from '../../services/endpoints/TokenPost';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) getUser();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.validate() && !password.validate()) {
      return;
    }

    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    const response = await fetch(url, {
      method: 'POST',
      options,
    });

    const json = await response.json();
    window.localStorage.setItem('token', json.token);
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
