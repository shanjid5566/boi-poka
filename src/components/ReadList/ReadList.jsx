import { FaUser, FaBook } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router";

const ReadList = ({ book }) => {
  const {bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow border flex gap-6 items-center min-h-56 mb-4">
      {/* Left: Image */}
      <img
        src={image}
        alt={bookName}
        className="w-28 h-auto rounded-md shadow"
      />

      {/* Right: Content */}
      <div className="flex-1">
        {/* Title & Author */}
        <h2 className="text-lg font-bold">{bookName}</h2>
        <p className="text-gray-600 mb-2">{author}</p>

        {/* Tags & Year */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {tags.map(tag=> <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm font-medium">
            #{tag}
          </span>)}
          <span className="flex items-center gap-1 text-sm text-gray-600 ml-2">
            <MdLocationOn className="text-gray-500" /> Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        {/* Publisher & Page */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <FaUser /> Publisher: {publisher}
          </span>
          <span className="flex items-center gap-1">
            <FaBook /> Page {totalPages}
          </span>
        </div>

        <hr className="my-3" />

        {/* Category, Rating & Button */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Category: {category}
          </span>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
            Rating: {rating}
          </span>
          <Link  to={`books/${bookId}`}><button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
