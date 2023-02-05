import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

export const Root = () => {
  return (
    <div className='mainWrapper'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
