import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import BookDetails from "../components/BookDetails/BookDetails";
import Books from "../components/Books/Books";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Root from "../layouts/Root";
import { booksAndCartLoader } from "../loaders/booksAndCartLoader";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: booksAndCartLoader,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/books', element: <Books></Books> },
            {
                path: '/book/:bookId',
                loader: ({params}) => {
                    return fetch(`https://api.itbook.store/1.0/books/${params.bookId}`);
                },
                element: <BookDetails></BookDetails>
            },
            { path: '/about', element: <About></About> },
        ]
    }
]);