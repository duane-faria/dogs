import React from 'react';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../forms/Input';
import { PASSWORD_RESET } from '../../api';
import Button from '../forms/Button';
import { useNavigate } from 'react-router-dom';
import Error from '../helper/Error';

export default function LoginPasswordReset() {
  const [key, setKey] = React.useState();
  const [login, setLogin] = React.useState();
  const password = useForm();
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) navigate('/login');
  }

  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nova senha'
          type='password'
          name='password'
          {...password}
        />
        {loading ? <Button>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </div>
  );
}
