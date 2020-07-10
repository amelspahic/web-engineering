import React, { useEffect } from "react";
import useBooks from "../../utils/hooks/useBooks";
import { Table, Button, Jumbotron } from "react-bootstrap";

const Books = () => {
  const [{ books, loading: booksLoading }, getBooks] = useBooks();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div>
      <Jumbotron>
        <h1>Books</h1>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.description}</td>
                <td>
                  {book.author?.firstName} {book.author?.lastName}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button>Add</Button>
    </div>
  );
};

export default Books;
