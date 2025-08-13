import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  console.log(books);
  const book = books.find((b) => b.bookId === id);

  const {
    bookId: thisUrlId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className=" mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-8">
      {/* Left: Book Image */}
      <div className="flex-shrink-0 w-1/2 bg-gray-100 p-16">
        <img
          src={image}
          alt={bookName}
          className="rounded-lg shadow-lg h-auto mx-auto"
        />
      </div>

      {/* Right: Book Info */}
      <div className="flex flex-col flex-1 w-1/2 mt-4">
        {/* Title & Author */}
        <h1 className="text-4xl font-bold mb-2">{bookName}</h1>
        <p className="text-gray-600 mb-4 text-xl">
          By : <span className="font-semibold ">{author}</span>
        </p>
        <div className="divider"></div>
        {/* Genre */}
        <p className="text-gray-700 font-medium mb-2 text-xl">{category}</p>
        <div className="divider"></div>
        {/* Review */}
        <div className="mb-4">
          <span className="font-bold">Review :</span>{" "}
          <span className="text-gray-700">
            {review}
          </span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-6">
            {tags.map(tag =><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            #{tag}
          </span>)}
        </div>

        {/* Book Info Table */}
        <div className="grid grid-cols-2 gap-y-2 text-gray-700 mb-6">
          <p>Number of Pages:</p>
          <p className="font-semibold">{totalPages}</p>
          <p>Publisher:</p>
          <p className="font-semibold">{publisher}.</p>
          <p>Year of Publishing:</p>
          <p className="font-semibold">{yearOfPublishing}</p>
          <p>Rating:</p>
          <p className="font-semibold">{rating}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-transparent text-black rounded-lg rounded-gray border hover:bg-gray-800 hover:text-white cursor-pointer">
            Mark as Read
          </button>
          <button className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 cursor-pointer">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
