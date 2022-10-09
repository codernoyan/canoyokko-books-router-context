import React, { useContext } from 'react';
import { BookContext } from '../../layouts/Root';
import Book from '../Book/Book';

const Books = () => {
    const books = useContext(BookContext);
    console.log(books);
    return (
        <div className='m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                books.map(book => <Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;