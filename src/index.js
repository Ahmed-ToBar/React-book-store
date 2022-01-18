import React from "react";
import ReactDOM from "react-dom";

import "./css/styles.css";
import Book from "./book"; // book component
import books from "./db"; // books database

// create "best seller badge" element the & select the card that will have "best seller badge".
const bestSeller_el = (
  <p className="best_seller">
    Best
    <br />
    seller
  </p>
);
const bestSeller_id = 6;

// the component that will render on the screen as parent.
function Store() {
  return (
    <>
      {books.map((book) => (
        <Book book={book} key={book.id}>
          {book.id === bestSeller_id ? bestSeller_el : !null}
        </Book>
      ))}
    </>
  );
}

// render the parent component by select what i want to render, and, where to render it.
ReactDOM.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
  document.getElementById("root")
);
