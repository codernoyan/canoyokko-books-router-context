import axios from "axios"

export const booksAndCartLoader = async () => {
    try {
        const booksData = await axios.get('https://api.itbook.store/1.0/new');
        const books = booksData.data.books;
        return books;
    } catch (error) {
        console.error(error);
    }
}