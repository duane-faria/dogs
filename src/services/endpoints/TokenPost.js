import React from 'react';

export default function TokenPost() {
  const [username, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((js) => setToken(js.token));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='email'
        value={username}
        onChange={({ target }) => setEmail(target.value)}
      />

      <input
        type='text'
        placeholder='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  );
}
