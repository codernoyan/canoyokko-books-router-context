import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
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
            { path: '/about', element: <About></About> }
        ]
    }
]);