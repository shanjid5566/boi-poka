import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    tags,
    category,
  } = book;
  return (
    <Link to={`/${bookId}`}>
      <div className="card  w-96 min-h-[700px] shadow-sm p-8 mb-10">
        <figure className="bg-gray-300 p-8 rounded-2xl min-h-72">
          <img src={image} alt={bookName} className="w-32" />
        </figure>
        <div className="my-3">
          {tags.map((tag) => (
            <div className="badge badge-secondary mx-3">{tag}</div>
          ))}
        </div>
        <div className="card-body flex justify-between">
          <div className="grow">
            <h2 className="card-title text-3xl font-bold">{bookName}</h2>
            <p className="text-lg font-semibold">{author}</p>
          </div>
          <div className="border border-dashed"></div>
          <div className="card-actions justify-between my-3 text-xl">
            <div className="badge ">{category}</div>
            <div className="">
              <h3>TotalPages : {totalPages}</h3>
              <p>Rating : {rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
