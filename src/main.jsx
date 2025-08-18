import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "./components/Root/Root";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import BookDetails from "./components/BookDetails/BookDetails";
import ListedBooks from "./components/ListedBooks/ListedBooks";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage> </ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
      },
      {
        path : "books/:bookId",
        element : <BookDetails></BookDetails>,
        loader : () => fetch("/booksData.json")
      },
      {
        path : "listed-books/books/:bookId",
        element : <BookDetails></BookDetails>,
        loader : () => fetch("/booksData.json")
      },
      {
        path : "/listed-books",
        element : <ListedBooks></ListedBooks>,
        loader : () => fetch("/booksData.json")
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
