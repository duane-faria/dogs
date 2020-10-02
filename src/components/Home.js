import React from 'react';
import Feed from './feed/Feed';

export default function Home() {
  document.title = 'Home';
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
}
