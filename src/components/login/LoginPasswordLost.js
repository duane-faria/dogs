import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../Hooks/useForm';
import { PASSWORD_LOST } from '../../api';
import useFetch from '../../Hooks/useFetch';

export default function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <div style={{ marginTop: '20vh' }}>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>E-mail enviado.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuário' type='text' name='login' {...login} />
          <Button>Enviar e-mail</Button>
        </form>
      )}
    </div>
  );
}
