import React from 'react';
import Header from '../../Pages/Shared/Header&Footer/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Header&Footer/Footer';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;