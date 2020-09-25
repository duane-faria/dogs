import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../forms/Button';
import Input from '../forms/Input';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import TokenPost from '../../services/endpoints/TokenPost';
import { UserContext } from '../../UserContext';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.validate() && !password.validate()) {
      return;
    }

    userLogin(username.value, password.value);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

        {loading ? (
          <Button disabled='true'>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
}
