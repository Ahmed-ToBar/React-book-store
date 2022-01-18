import React from "react";

const Book = ({ book, children }) => {
  const { id, img, title, author } = book;

  // function to open the book
  const openBook = (e) => {
    const clicked_Book = document.getElementById("openBook");
    clicked_Book.children[0].src = e.target.src;
    clicked_Book.classList.add("show");
  };

  return (
    <div className="card">
      {children}
      <span className="num">{id + 1}</span>
      <div className="img">
        <img src={img} alt="Book cover" onClick={(e) => openBook(e)} />
      </div>
      <h2 className="title onHover">{title}</h2>
      <h3 className="author onHover">{author}</h3>
      <div
        className={id === 0 ? "openBook opend" : "openBook"}
        id="openBook"
        onClick={(e) => e.target.classList.remove("show")}
      >
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Book;
