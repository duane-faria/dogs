import React from 'react';

export default function PhotoGet() {
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((js) => console.log(js));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' />
      <button>enviar</button>
    </form>
  );
}
