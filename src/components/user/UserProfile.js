import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../feed/Feed';
import Head from '../helper/Head';

function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container mainSection">
        <Head
        title='Perfil'
        description='Perfil do usuário com todas as fotos que o mesmo postou.'
      />
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
