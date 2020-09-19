import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';

const Api = () => {
  return (
    <div>
      <h2>User post</h2>
      <UserPost />
      <h2>Token post</h2>
      <TokenPost />
      <h2>upload</h2>
      <PhotoPost />
    </div>
  );
};

export default Api;
