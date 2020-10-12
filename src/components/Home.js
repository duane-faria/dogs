import React from 'react';
import Feed from './feed/Feed';
import Head from './helper/Head';

export default function Home() {
  return (
    <section className='container mainContainer'>
      <Head
        title='Fotos'
        description='Home do site Dogs, com o feed de fotos'
      />
      <Feed />
    </section>
  );
}
