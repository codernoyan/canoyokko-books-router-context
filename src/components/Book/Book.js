import React from 'react';

const Book = ({ book }) => {
    const { isbn13: id, image, price, title } = book;
    return (
        <>
            <div className="max-w-full flex flex-col justify-between rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
                        <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                </div>
                <div className='p-4'>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-sky-400 dark:text-gray-200">Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Book;