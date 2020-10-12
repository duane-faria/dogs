import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

export default function User() {
  const { data } = React.useContext(UserContext);

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </section>
  );
}
