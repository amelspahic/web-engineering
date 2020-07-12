import React, { useEffect, useState } from "react";
import useBooks from "../../utils/hooks/useBooks";
import { Table, Button, Jumbotron, Modal, Spinner } from "react-bootstrap";
import Book from "./Book";
import useDeleteBook from "../../utils/hooks/useBookDelete";

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [{ books, loading: booksLoading }, getBooks] = useBooks();
  const [, deleteBook] = useDeleteBook(selectedBook && selectedBook._id);
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
            <th>Actions</th>
          </tr>
        </thead>
        {booksLoading ? (
          <tbody>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Spinner animation="border" />
              </td>
            </tr>
          </tbody>
        ) : (
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
                    <span
                      onClick={() => handleEdit(book)}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      edit
                    </span>{" "}
                    |{" "}
                    <span
                      onClick={() => handleDelete(book)}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </Table>
      <Button onClick={handleModal}>Add</Button>

      <Book
        isShown={showModal}
        handleClose={hideModal}
        selectedBook={selectedBook}
      ></Book>

      <Modal
        animation={false}
        show={showDeleteModal}
        onHide={() => hideDeleteModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete book:{" "}
          <span style={{ fontWeight: "bold" }}>{selectedBook?.title}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hideDeleteModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDeleteBook(true)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Books;
