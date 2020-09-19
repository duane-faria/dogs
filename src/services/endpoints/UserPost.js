import React from 'react';

export default function UserPost() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((js) => console.log(js));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type='text'
        placeholder='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
