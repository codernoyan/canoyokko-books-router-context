import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorAnimation from '../../assets/404_page.gif'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <img src={errorAnimation} alt="" />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;