import React from 'react';
import PhotoGet from './Endpoints/PhotoGet';
import PhotoPost from './Endpoints/PhotoPost';
import TokenPost from './Endpoints/TokenPost';
import UserPost from './Endpoints/UserPost';

const Api = () => {
  return (
    <div>
      <h2>TEST USER POST</h2>
      <UserPost />
      <h2>TEST TOKEN POST</h2>
      <TokenPost />
      <h2>TEST PHOTO POST</h2>
      <PhotoPost />
      <h2>TEST PHOTO GET</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
