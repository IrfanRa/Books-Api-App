import { log } from 'console';
import React from 'react';

type Book = {
    id: number,
    name: string,
    type: string,
    available: boolean
};

async function getBooks() {
    const response = await fetch("https://simple-books-api.glitch.me/books", {
        cache: "no-store"
    });
    const data = response.json();
    return data;
}

export default async function staticPage() {
   const books = await getBooks();
   
  return (
    <div>
      <h1>Dynamic Page</h1>
      {books.map((book: Book) => (
        <ul key={book.id}>
            <li>{book.name} - {book.type}</li>

        </ul>
      ))}
    </div>
  )
}
