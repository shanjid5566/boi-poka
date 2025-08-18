import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataFromLs, getWhistDataFromLs } from "../../utility/localStore";
import ReadList from "../ReadList/ReadList";
import WhistList from "../WhistList/WhistList";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [whistBooks, setWhistBooks] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const readBooksId = getDataFromLs();
    const whistBooksId = getWhistDataFromLs();
    const readBooksIdInt = readBooksId.map((id) => parseInt(id));
    const whistBooksIdInt = whistBooksId.map((id) => parseInt(id));

    const allReadBooks = books.filter((book) =>
      readBooksIdInt.includes(book.bookId)
    );
    const allWhistBooks = books.filter((book) =>
      whistBooksIdInt.includes(book.bookId)
    );
    setReadBooks(allReadBooks);
    setWhistBooks(allWhistBooks);
  }, []);
  return (
    <div className="my-6">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WhishList Books</Tab>
        </TabList>

        <TabPanel>
          <div className="grid-cols-1 gap-4">
            {readBooks.map((book) => (
            <ReadList key={book.bookId} book={book}></ReadList>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid-cols-1 gap-4">
            {whistBooks.map((book) => (
            <WhistList key={book.bookId} book={book}></WhistList>
          ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
