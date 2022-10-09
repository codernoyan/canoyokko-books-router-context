import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const BookContext = createContext([]);

const Root = () => {
    const books = useLoaderData();
    return (
        <BookContext.Provider value={books}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </BookContext.Provider>
    );
};

export default Root;