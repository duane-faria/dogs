import React from 'react';

export default function PhotoPost() {
  const [token, setToken] = React.useState('');
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('img', img);
    formData.append('nome', name);
    formData.append('peso', weight);
    formData.append('idade', age);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
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
        placeholder='token'
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type='text'
        placeholder='email'
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type='text'
        placeholder='password'
        value={weight}
        onChange={({ target }) => setWeight(target.value)}
      />
      <input
        type='text'
        placeholder='password'
        value={age}
        onChange={({ target }) => setAge(target.value)}
      />
      <input type='file' onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
}
