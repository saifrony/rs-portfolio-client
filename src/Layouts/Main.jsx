import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer';
import Navber from '../Shares/Navber/Navber';

const Main = () => {
    return (
         <div>
      <Navber />
      <div className='max-w-screen-xl lg:mx-auto px-6'>
        <Outlet />
      </div>
      <Footer />
    </div>
    );
};

export default Main;