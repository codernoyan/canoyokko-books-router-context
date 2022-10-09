import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorAnimation from '../../assets/404_page.gif'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        // <div>
        //     <img src={errorAnimation} alt="" />
        //     <h1>Oops!</h1>
        //     <p>Sorry, an unexpected error has occurred.</p>
        //     <p>
        //         <i>{error.statusText || error.message}</i>
        //     </p>
        // </div>
        <section className="flex items-center h-screen p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <img className='h-80 w-full object-cover' src={errorAnimation} alt="" />
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        {/* <span className="sr-only">Error</span>404 */}
                    </h2>
                    {/* <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p> */}
                    <p className="text-2xl font-semibold md:text-3xl"><em>{error.statusText || error.message}</em></p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link rel="noopener noreferrer" to="/home" className="px-8 py-3 font-semibold rounded dark:bg-sky-400 dark:text-white">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;