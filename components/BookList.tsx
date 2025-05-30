import React from "react";
import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[] | BorrowedBook[];
  isBorrowed?: boolean;
  containerClassName?: string;
  showSorts?: boolean;
  showNoResultBtn?: boolean;
}

const BookList = ({
  title,
  books,
  isBorrowed,
  containerClassName,
  showSorts = false,
  showNoResultBtn = false,
}: Props) => {
  return (
    <section className={containerClassName}>
      <div className="font-bebas-neue text-4xl text-light-100">{title}</div>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
