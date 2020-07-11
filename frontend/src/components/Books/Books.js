import React, { useEffect, useState } from "react";
import useBooks from "../../utils/hooks/useBooks";
import { Table, Button, Jumbotron, Modal } from "react-bootstrap";
import Book from "./Book";
import useDeleteBook from "../../utils/hooks/useBookDelete";

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [{ books, loading: booksLoading }, getBooks] = useBooks();
  const [{ deleteLoading }, deleteBook] = useDeleteBook(
    selectedBook && selectedBook._id
  );
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleModal = () => setShowModal(true);

  const hideModal = (fromModal) => {
    setSelectedBook(null);
    setShowModal(false);

    if (fromModal) {
      getBooks();
    }
  };

  const hideDeleteModal = (isDeleted) => {
    setSelectedBook(null);
    setShowDeleteModal(false);

    if (isDeleted) {
      getBooks();
    }
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleDelete = (book) => {
    setSelectedBook(book);
    setShowDeleteModal(true);
  };

  const handleDeleteBook = async () => {
    await deleteBook();
    hideDeleteModal(true);
  };

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
            <th>Action</th>
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
                <td>
                  <span onClick={() => handleEdit(book)}>edit</span> |{" "}
                  <span onClick={() => handleDelete(book)}>delete</span>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button onClick={handleModal}>Add</Button>

      <Book
        isShown={showModal}
        handleClose={hideModal}
        selectedBook={selectedBook}
      ></Book>

      <Modal animation={false} show={showDeleteModal} onHide={hideDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedBook?._id}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideDeleteModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteBook}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Books;
